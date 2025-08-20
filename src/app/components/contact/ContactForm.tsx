'use client';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { HiOutlinePaperAirplane } from 'react-icons/hi';

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  endpoint?: string;
  onSuccess?: () => void;
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  try {
    return String(err);
  } catch {
    return 'Unknown error';
  }
}

// Default endpoint
const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgqyvzn';

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be 50 characters or less.')
    .required('Please enter your name.'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Email is required.'),
  subject: Yup.string()
    .trim()
    .min(3, 'Subject must be at least 3 characters.')
    .max(150, 'Subject must be 150 characters or less.')
    .required('Please provide a subject.'),
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(5000, 'Message is too long.')
    .required('Please write your message.'),
});

const ContactForm: React.FC<ContactFormProps> = ({ endpoint = DEFAULT_FORMSPREE_ENDPOINT, onSuccess }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  // Formik setup with validation schema
  const formik = useFormik<FormDataState>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitError('');
      setSubmitSuccess(false);

      // Honeypot check
      const botcheck = (formRef.current?.querySelector('input[name="my_unique_honeypot"]') as HTMLInputElement | null)?.value;
      if (botcheck) {
        setSubmitError('Spam detected.');
        console.warn('Honeypot triggered, aborting submit.');
        setSubmitting(false);
        return;
      }

      if (!endpoint) {
        const msg = 'Missing Formspree endpoint. Provide `endpoint` prop or edit DEFAULT_FORMSPREE_ENDPOINT.';
        console.error(msg);
        setSubmitError(msg);
        setSubmitting(false);
        return;
      }

      const payload: Record<string, unknown> = {
        name: values.name || 'No name',
        email: values.email || 'no-reply@example.com',
        subject: values.subject || 'No subject',
        message: values.message || '(empty message)',
        time: new Date().toLocaleString(),
        site_url: typeof window !== 'undefined' ? window.location.href : '',
        _subject: values.subject || 'Website Contact Form',
        _replyto: values.email || undefined,
      };

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          let errorText = `Status ${res.status}`;
          try {
            const json: unknown = await res.json();
            if (typeof json === 'object' && json !== null) {
              const obj = json as Record<string, unknown>;
              if (typeof obj.error === 'string' && obj.error.length > 0) {
                errorText = obj.error;
              } else if (Array.isArray(obj.errors) && obj.errors.length > 0) {
                const errorsArray = obj.errors as unknown[];
                errorText = errorsArray
                  .map(item => {
                    if (typeof item === 'object' && item !== null) {
                      const itm = item as Record<string, unknown>;
                      if (typeof itm.message === 'string') return itm.message;
                      return JSON.stringify(itm);
                    }
                    return String(item);
                  })
                  .join('; ');
              } else if (typeof obj.message === 'string' && obj.message.length > 0) {
                errorText = obj.message;
              } else {
                errorText = JSON.stringify(obj);
              }
            } else {
              errorText = String(json);
            }
          } catch {
            try {
              const txt = await res.text();
              if (txt) errorText = txt;
            } catch {
              /* ignore */
            }
          }
          throw new Error(errorText);
        }

        setSubmitSuccess(true);
        resetForm();
        onSuccess?.();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (err: unknown) {
        console.error('Formspree error:', err);
        setSubmitError(`Failed to send: ${getErrorMessage(err)}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Your message has been sent successfully!</span>
          </div>
        </div>
      )}

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{submitError}</span>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto" noValidate>
        <input type="text" name="my_unique_honeypot" tabIndex={-1} autoComplete="off" className="hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-600 placeholder-opacity-100 text-gray-700 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
              placeholder="John Doe"
              aria-label="Your name"
            />
            {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-600 placeholder-opacity-100 text-gray-700 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              placeholder="john@example.com"
              aria-label="Email address"
            />
            {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={Boolean(formik.touched.subject && formik.errors.subject)}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-600 placeholder-opacity-100 text-gray-700 ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}`}
            placeholder="How can we help?"
            aria-label="Subject"
          />
          {formik.touched.subject && formik.errors.subject && <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={5}
            aria-invalid={Boolean(formik.touched.message && formik.errors.message)}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-600 placeholder-opacity-100 text-gray-700 ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us about your project..."
            aria-label="Your message"
          />
          {formik.touched.message && formik.errors.message && <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`w-full px-6 py-4 text-white rounded-lg font-medium shadow-lg transition-all flex items-center justify-center ${formik.isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'}`}
          aria-live="polite"
        >
          {formik.isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message <HiOutlinePaperAirplane className="ml-2 transform rotate-90" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
