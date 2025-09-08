import { factories } from '@strapi/strapi';
import axios from 'axios';

export default factories.createCoreController('api::currency-rate.currency-rate', ({ strapi }) => ({
  async updateRates(ctx) {
    const now = new Date();
    const todayLocal = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
    const todayString = todayLocal.toISOString().split('T')[0];

    console.log(`\n🔍 === DÉBUT DEBUG updateRates ===`);
    console.log(`📅 Date serveur: ${now.toISOString()}`);
    console.log(`📅 Date locale calculée: ${todayString}`);

    // ✅ NOUVELLE VÉRIFICATION : Compter combien de devises ont la bonne date
    console.log(`🔍 Vérification complète des dates...`);
    
    const allEntries = await strapi.entityService.findMany('api::currency-rate.currency-rate', {
      pagination: { pageSize: 500 },
      sort: 'currencyCode:asc',
    });

    console.log(`📊 Total entrées en BDD: ${allEntries.length}`);

    if (allEntries.length > 0) {
      // Compter combien ont la date d'aujourd'hui
      const todayEntries = allEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        const entryString = entryDate.toISOString().split('T')[0];
        return entryString === todayString;
      });

      const outdatedEntries = allEntries.filter(entry => {
        const entryDate = new Date(entry.date);
        const entryString = entryDate.toISOString().split('T')[0];
        return entryString !== todayString;
      });

      console.log(`📊 Analyse des dates:`);
      console.log(`   - À jour (${todayString}): ${todayEntries.length}`);
      console.log(`   - Périmées: ${outdatedEntries.length}`);
      
      if (outdatedEntries.length > 0) {
        console.log(`   - Exemples périmés:`);
        outdatedEntries.slice(0, 5).forEach(entry => {
          const entryDate = new Date(entry.date);
          const entryString = entryDate.toISOString().split('T')[0];
          console.log(`     * ${entry.currencyCode}: ${entryString}`);
        });
      }

      // ✅ CONDITION CORRIGÉE : Toutes les devises doivent être à jour
      if (outdatedEntries.length === 0) {
        console.log(`✅ TOUTES les données sont à jour, pas de mise à jour nécessaire`);
        console.log(`🔍 === FIN DEBUG (cached) ===\n`);
        ctx.body = { 
          message: 'Toutes les données sont à jour',
          date: todayString,
          cached: true,
          summary: {
            total: allEntries.length,
            upToDate: todayEntries.length,
            outdated: 0
          }
        };
        return;
      } else {
        console.log(`🔄 MISE À JOUR NÉCESSAIRE ! ${outdatedEntries.length} devises à mettre à jour`);
      }
    }

    // Si on arrive ici, une mise à jour est nécessaire
    console.log(`🌐 Appel API OpenExchangeRates...`);
    
    const appId = 'ac8c979cb9a947caae053c0d2a071ab5';
    const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

    try {
      const res = await axios.get(url);
      console.log(`✅ Réponse API reçue, statut: ${res.status}`);
      
      const data = res.data;
      const MGA = data.rates['MGA'];
      const updateDate = new Date(todayString + 'T00:00:00.000Z');
      
      console.log(`💱 Taux MGA de base: ${MGA}`);
      console.log(`📅 Date de mise à jour: ${updateDate.toISOString()}`);
      
      let updateCount = 0;
      let createCount = 0;
      let errorCount = 0;
      const currencies = Object.keys(data.rates).filter(code => code !== 'MGA');
      
      console.log(`📊 Traitement de ${currencies.length} devises...`);
      
      // ✅ Traitement par batch pour optimiser les performances
      const BATCH_SIZE = 50;
      const totalBatches = Math.ceil(currencies.length / BATCH_SIZE);
      
      for (let i = 0; i < currencies.length; i += BATCH_SIZE) {
        const batch = currencies.slice(i, i + BATCH_SIZE);
        const currentBatch = Math.floor(i / BATCH_SIZE) + 1;
        
        console.log(`\n📦 Traitement du batch ${currentBatch}/${totalBatches} (${batch.length} devises)`);
        
        for (const code of batch) {
          try {
            const rate = MGA / data.rates[code];
            
            const existing = await strapi.entityService.findMany('api::currency-rate.currency-rate', {
              filters: { currencyCode: code },
              limit: 1,
            });

            if (existing.length > 0) {
              await strapi.entityService.update('api::currency-rate.currency-rate', existing[0].id, {
                data: { amount: rate, date: updateDate },
              });
              updateCount++;
            } else {
              await strapi.entityService.create('api::currency-rate.currency-rate', {
                data: {
                  currencyCode: code,
                  currencyName: code,
                  amount: rate,
                  date: updateDate,
                },
              });
              createCount++;
            }
          } catch (error) {
            console.error(`❌ Erreur lors du traitement de ${code}:`, error.message);
            errorCount++;
          }
        }
        
        console.log(`✅ Batch ${currentBatch} terminé: ${batch.length} devises traitées`);
      }

      console.log(`\n✅ MISE À JOUR TERMINÉE !`);
      console.log(`📊 Résumé détaillé:`);
      console.log(`   - Mises à jour: ${updateCount}`);
      console.log(`   - Créations: ${createCount}`);
      console.log(`   - Erreurs: ${errorCount}`);
      console.log(`   - Total traité: ${updateCount + createCount}`);
      console.log(`   - Total devises: ${currencies.length}`);
      console.log(`🔍 === FIN DEBUG (updated) ===\n`);

      ctx.body = { 
        message: `Taux mis à jour avec succès pour ${currencies.length} devises`,
        date: todayString,
        summary: { 
          updated: updateCount, 
          created: createCount, 
          errors: errorCount,
          total: currencies.length,
          processed: updateCount + createCount,
          successRate: `${Math.round((updateCount + createCount) / currencies.length * 100)}%`
        },
        cached: false
      };

    } catch (err) {
      console.error('❌ ERREUR lors de la mise à jour:', err);
      console.log(`🔍 === FIN DEBUG (erreur) ===\n`);
      ctx.status = 500;
      ctx.body = { 
        error: 'Erreur lors de la récupération des taux', 
        details: (err as Error).message 
      };
    }
  },

  async findFresh(ctx) {
    console.log(`\n🔍 === DÉBUT findFresh ===`);
    
    // Appeler updateRates
    await this.updateRates(ctx);

    if (ctx.status && ctx.status !== 200) {
      console.log(`❌ updateRates a échoué, arrêt`);
      return;
    }

    console.log(`📋 Récupération des données en BDD...`);
    const data = await strapi.entityService.findMany('api::currency-rate.currency-rate', {
      pagination: { pageSize: 500 },
      sort: 'currencyCode:asc',
    });

    console.log(`📊 ${data.length} entrées récupérées`);
    if (data.length > 0) {
      const firstEntry = data[0];
      const lastEntry = data[data.length - 1];
      console.log(`   - Première: ${firstEntry.currencyCode} (date: ${firstEntry.date})`);
      console.log(`   - Dernière: ${lastEntry.currencyCode} (date: ${lastEntry.date})`);
    }

    console.log(`🔍 === FIN findFresh ===\n`);

    ctx.body = { 
      data,
      metadata: {
        count: data.length,
        lastUpdate: data.length > 0 ? data[0].date : null,
        fresh: true
      }
    };
  },
}));