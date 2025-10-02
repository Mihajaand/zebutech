// src/types/emailjs.types.ts

export interface FormData {
  type: string;
  nom: string;
  lieu: string;
  parrain: string;
  civilite: string;
  nomPrenom: string;
  email: string;
  countryCode: string;
  telephone: string;
  message: string;
  hasWhatsapp: boolean;
}

export interface Country {
  iso: string;
  code: string;
  name: string;
}

export interface EmailJSTemplateParams {
  type_etablissement: string;
  nom_etablissement: string;
  lieu: string;
  parrain: string;
  civilite: string;
  nom_prenom: string;
  email: string;
  telephone: string;
  has_whatsapp: 'Oui' | 'Non';
  message: string;
  date: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface EmailJSResponse {
  status: number;
  text: string;
}

export interface EmailJSError {
  text?: string;
  status?: number;
}