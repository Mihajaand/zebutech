// src/utils/emailjs.utils.ts

import { FormData, EmailJSTemplateParams } from '../types/emailjs.types';

/**
 * Formate les données du formulaire pour le template EmailJS
 */
export const formatFormDataForEmail = (formData: FormData): EmailJSTemplateParams => {
  return {
    type_etablissement: formData.type,
    nom_etablissement: formData.nom,
    lieu: formData.lieu,
    parrain: formData.parrain || 'Non spécifié',
    civilite: formData.civilite,
    nom_prenom: formData.nomPrenom,
    email: formData.email,
    telephone: `${formData.countryCode} ${formData.telephone}`,
    has_whatsapp: formData.hasWhatsapp ? 'Oui' : 'Non',
    message: formData.message || 'Pas de message',
    date: formatDate(new Date()),
  };
};

/**
 * Formate une date en français
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Valide le format d'un email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valide le format d'un numéro de téléphone
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  // Au moins 8 chiffres
  const phoneRegex = /\d{8,}/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Nettoie les espaces dans un numéro de téléphone
 */
export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\s+/g, ' ').trim();
};

/**
 * Messages d'erreur personnalisés
 */
export const getErrorMessage = (error: any): string => {
  if (error?.text) {
    return error.text;
  }
  
  if (error?.status === 400) {
    return 'Les données du formulaire sont invalides. Veuillez vérifier vos informations.';
  }
  
  if (error?.status === 401) {
    return 'Erreur d\'authentification EmailJS. Veuillez contacter l\'administrateur.';
  }
  
  if (error?.status === 403) {
    return 'Accès refusé. Vérifiez votre configuration EmailJS.';
  }
  
  if (error?.status === 404) {
    return 'Service ou template EmailJS introuvable. Vérifiez votre configuration.';
  }
  
  if (error?.status >= 500) {
    return 'Erreur serveur EmailJS. Veuillez réessayer plus tard.';
  }
  
  return 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.';
};