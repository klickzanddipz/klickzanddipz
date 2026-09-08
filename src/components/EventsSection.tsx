import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Sparkles, PartyPopper, User, Phone, MapPin,
  MessageSquare, Tag, CheckCircle2, AlertCircle, ChevronDown,
  ChevronLeft, ChevronRight, Check
} from 'lucide-react';

const WhatsappIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Custom UI Dropdown Component
interface CustomSelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  hasError = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 rounded-xl border ${hasError ? 'border-red-500 bg-red-50/30' : isOpen ? 'border-[#2D5032] ring-2 ring-[#E58E26]/40' : 'border-gray-300'
          } bg-[#FAF7F2] text-[#1A2318] font-medium flex items-center justify-between transition-all shadow-inner text-left`}
      >
        <span className={selectedOption && selectedOption.value !== '' ? 'text-[#1A2318] font-bold' : 'text-gray-400 font-medium'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} className={`text-[#2D5032] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 z-50 mt-1 bg-white/95 backdrop-blur-xl border-2 border-[#2D5032]/20 rounded-2xl shadow-2xl overflow-hidden py-1 max-h-60 overflow-y-auto"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm font-semibold flex items-center justify-between transition-colors ${isSelected
                    ? 'bg-[#2D5032] text-white'
                    : 'text-[#1A2318] hover:bg-[#E8F0E6] hover:text-[#2D5032]'
                    }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check size={16} className="text-[#E58E26]" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Custom UI Date Picker Component
interface CustomDatePickerProps {
  value: string; // YYYY-MM-DD
  onChange: (value: string) => void;
  minDate?: string;
  hasError?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  minDate,
  hasError = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialDate = value ? new Date(value) : new Date();
  const [viewDate, setViewDate] = useState<Date>(isNaN(initialDate.getTime()) ? new Date() : initialDate);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = new Date(year, month, 1).getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const min = minDate ? new Date(minDate) : today;
  min.setHours(0, 0, 0, 0);

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleSelectDay = (dayNum: number) => {
    const selected = new Date(year, month, dayNum);
    const y = selected.getFullYear();
    const m = String(selected.getMonth() + 1).padStart(2, '0');
    const d = String(selected.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    onChange(dateStr);
    setIsOpen(false);
  };

  const formatDisplayDate = (valStr: string) => {
    if (!valStr) return 'Select Event Date';
    const d = new Date(valStr);
    if (isNaN(d.getTime())) return 'Select Event Date';
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 rounded-xl border ${hasError ? 'border-red-500 bg-red-50/30' : isOpen ? 'border-[#2D5032] ring-2 ring-[#E58E26]/40' : 'border-gray-300'
          } bg-[#FAF7F2] text-[#1A2318] font-medium flex items-center justify-between transition-all shadow-inner text-left`}
      >
        <span className={value ? 'text-[#1A2318] font-bold' : 'text-gray-400 font-medium'}>
          {formatDisplayDate(value)}
        </span>
        <Calendar size={18} className="text-[#E58E26]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 sm:left-0 z-50 mt-1 w-72 bg-white/95 backdrop-blur-xl border-2 border-[#2D5032]/20 rounded-2xl shadow-2xl p-4"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#2D5032] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-black font-display text-sm text-[#1A2318] uppercase tracking-wider">
                {monthNames[month]} {year}
              </span>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 rounded-lg hover:bg-gray-100 text-[#2D5032] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <span key={d} className="text-[11px] font-bold text-gray-400">
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: startDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const currentCellDate = new Date(year, month, dayNum);
                currentCellDate.setHours(0, 0, 0, 0);

                const isDisabled = currentCellDate < min;

                const y = currentCellDate.getFullYear();
                const m = String(currentCellDate.getMonth() + 1).padStart(2, '0');
                const d = String(currentCellDate.getDate()).padStart(2, '0');
                const cellDateStr = `${y}-${m}-${d}`;

                const isSelected = value === cellDateStr;

                return (
                  <button
                    key={dayNum}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleSelectDay(dayNum)}
                    className={`h-8 w-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${isDisabled
                      ? 'text-gray-300 cursor-not-allowed'
                      : isSelected
                        ? 'bg-[#E58E26] text-white shadow-md scale-105'
                        : 'text-[#1A2318] hover:bg-[#E8F0E6] hover:text-[#2D5032]'
                      }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const EventsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCodeType: '+91',
    customCountryCode: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventPlace: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countryCodeOptions = [
    { label: '+91 (India)', value: '+91' },
    { label: 'Other', value: 'Other' }
  ];

  const eventTypeOptions = [
    { label: 'Select Event Type', value: '' },
    { label: 'Birthday Party', value: 'Birthday Party' },
    { label: 'Corporate Event / Gathering', value: 'Corporate Event / Gathering' },
    { label: 'Private Party / Get-Together', value: 'Private Party / Get-Together' },
    { label: 'Photobooth Celebration', value: 'Photobooth Celebration' },
    { label: 'Anniversary / Special Day', value: 'Anniversary / Special Day' },
    { label: 'College Meetup / Reunion', value: 'College Meetup / Reunion' },
    { label: 'Workshop / Seminar', value: 'Workshop / Seminar' },
    { label: 'Other Event', value: 'Other Event' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter phone number';
    } else if (!/^\d{6,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.countryCodeType === 'Other' && !formData.customCountryCode.trim()) {
      newErrors.customCountryCode = 'Enter code';
    }

    if (!formData.eventType) newErrors.eventType = 'Please select event type';
    if (!formData.eventDate) newErrors.eventDate = 'Please select event date';
    if (!formData.eventPlace.trim()) newErrors.eventPlace = 'Please enter event place or venue';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    let finalCode = '+91';
    if (formData.countryCodeType === 'Other') {
      const code = formData.customCountryCode.trim();
      finalCode = code.startsWith('+') ? code : `+${code}`;
    }

    // Save contact details to LocalStorage for future visits
    localStorage.setItem('klickz_user_name', formData.name);
    localStorage.setItem('klickz_user_phone', formData.phone);
    localStorage.setItem('klickz_user_code_type', formData.countryCodeType);
    localStorage.setItem('klickz_user_custom_code', formData.customCountryCode);

    const lines = [
      '🎉 *New Event Booking Enquiry - Klickz & Dipz*',
      '',
      `👤 *Name:* ${formData.name.trim()}`,
      `📞 *WhatsApp:* ${finalCode} ${formData.phone.trim()}`,
      `🎈 *Event Type:* ${formData.eventType}`,
      `📅 *Event Date:* ${formData.eventDate}`,
      `📍 *Event Place:* ${formData.eventPlace.trim()}`
    ];

    if (formData.message.trim()) {
      lines.push(`📝 *Message / Notes:*`, formData.message.trim());
    }

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/919790998182?text=${encodeURIComponent(fullMessage)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 400);
  };

  useEffect(() => {
    // Load saved contact details if they exist
    const savedName = localStorage.getItem('klickz_user_name');
    const savedPhone = localStorage.getItem('klickz_user_phone');
    const savedCodeType = localStorage.getItem('klickz_user_code_type');
    const savedCustomCode = localStorage.getItem('klickz_user_custom_code');

    if (savedName || savedPhone) {
      setFormData(prev => ({
        ...prev,
        name: savedName || prev.name,
        phone: savedPhone || prev.phone,
        countryCodeType: savedCodeType || prev.countryCodeType,
        customCountryCode: savedCustomCode || prev.customCountryCode,
      }));
    }
  }, []);

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="events" className="py-16 md:py-24 bg-brand-doodle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Standardized Section Header matching website design system */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-extrabold font-display text-xs uppercase tracking-widest mb-2 border border-brand-primary/20">
            <PartyPopper size={14} className="text-brand-accent" />
            <span>Exciting Celebrations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-brand-primary tracking-tight uppercase">
            PLAN YOUR <span className="text-brand-accent">EVENT WITH US</span>
          </h2>
          <p className="text-brand-dark/70 font-extrabold font-display uppercase tracking-widest mt-2">
            Host Birthdays, Corporate Meetups & Private Gatherings
          </p>
        </div>

        {/* Event Booking Form Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="floating-card p-6 sm:p-10 relative overflow-hidden bg-white/95 backdrop-blur-xl border-2 border-brand-primary/20 shadow-2xl rounded-3xl"
          >
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -top-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>

              {/* 1. Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                  <User size={18} className="text-brand-accent" />
                  <span>Your Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3.5 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-brand-primary'} bg-brand-bg text-brand-dark font-medium outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all shadow-inner`}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              {/* 2. WhatsApp Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-brand-accent" />
                  <span>WhatsApp Number <span className="text-red-500">*</span></span>
                </label>

                <div className="flex flex-row items-start gap-2 sm:gap-3">
                  <div className="w-36 flex-shrink-0">
                    <CustomSelect
                      options={countryCodeOptions}
                      value={formData.countryCodeType}
                      onChange={(val) => {
                        setFormData(prev => ({ ...prev, countryCodeType: val }));
                        if (errors.customCountryCode) setErrors(prev => ({ ...prev, customCountryCode: '' }));
                      }}
                    />
                  </div>

                  {formData.countryCodeType === 'Other' && (
                    <div className="w-20 sm:w-24 flex-shrink-0">
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 font-bold text-brand-primary text-sm">+</span>
                        <input
                          type="text"
                          id="customCountryCode"
                          name="customCountryCode"
                          maxLength={3}
                          value={formData.customCountryCode.replace(/^\+/, '')}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
                            setFormData(prev => ({ ...prev, customCountryCode: val ? `+${val}` : '' }));
                            if (errors.customCountryCode) setErrors(prev => ({ ...prev, customCountryCode: '' }));
                          }}
                          placeholder="123"
                          className={`w-full pl-6 pr-2 py-3.5 rounded-xl border ${errors.customCountryCode ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-brand-primary'} bg-brand-bg text-brand-dark font-bold outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all shadow-inner text-center`}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className={`w-full px-4 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-brand-primary'} bg-brand-bg text-brand-dark font-medium outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all shadow-inner`}
                    />
                  </div>
                </div>

                {(errors.phone || errors.customCountryCode) && (
                  <div className="mt-1.5 space-y-1">
                    {errors.customCountryCode && (
                      <p className="text-red-600 text-xs font-semibold flex items-center gap-1">
                        <AlertCircle size={14} /> Custom Code: {errors.customCountryCode}
                      </p>
                    )}
                    {errors.phone && (
                      <p className="text-red-600 text-xs font-semibold flex items-center gap-1">
                        <AlertCircle size={14} /> Phone: {errors.phone}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* 3. Type of Event */}
              <div>
                <label htmlFor="eventType" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                  <Tag size={18} className="text-brand-accent" />
                  <span>Type of Event <span className="text-red-500">*</span></span>
                </label>
                <CustomSelect
                  options={eventTypeOptions}
                  value={formData.eventType}
                  onChange={(val) => {
                    setFormData(prev => ({ ...prev, eventType: val }));
                    if (errors.eventType) setErrors(prev => ({ ...prev, eventType: '' }));
                  }}
                  placeholder="Select Event Type"
                  hasError={!!errors.eventType}
                />
                {errors.eventType && (
                  <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.eventType}
                  </p>
                )}
              </div>

              {/* 4. Event Date & Event Place */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                    <Calendar size={18} className="text-brand-accent" />
                    <span>Event Date <span className="text-red-500">*</span></span>
                  </label>
                  <CustomDatePicker
                    value={formData.eventDate}
                    onChange={(val) => {
                      setFormData(prev => ({ ...prev, eventDate: val }));
                      if (errors.eventDate) setErrors(prev => ({ ...prev, eventDate: '' }));
                    }}
                    minDate={todayStr}
                    hasError={!!errors.eventDate}
                  />
                  {errors.eventDate && (
                    <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.eventDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="eventPlace" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-brand-accent" />
                    <span>Event Place <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="eventPlace"
                    name="eventPlace"
                    value={formData.eventPlace}
                    onChange={handleInputChange}
                    placeholder="Enter Event Place"
                    className={`w-full px-4 py-3.5 rounded-xl border ${errors.eventPlace ? 'border-red-500 bg-red-50/30' : 'border-gray-300 focus:border-brand-primary'} bg-brand-bg text-brand-dark font-medium outline-none focus:ring-2 focus:ring-brand-accent/40 transition-all shadow-inner`}
                  />
                  {errors.eventPlace && (
                    <p className="text-red-600 text-xs font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.eventPlace}
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-extrabold font-display uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-brand-accent" />
                  <span>Message / Special Requests</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about expected guest count, timing, food requirements, or custom setups..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-brand-bg text-brand-dark font-medium outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-accent/40 transition-all shadow-inner resize-y"
                />
              </div>

              {/* 6. Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-reflex w-full py-4 text-base sm:text-lg flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all font-black uppercase tracking-wider rounded-2xl active:scale-[0.98] cursor-pointer"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={24} className="animate-bounce" />
                      <span>OPENING WHATSAPP...</span>
                    </>
                  ) : (
                    <>
                      <WhatsappIcon className="w-6 h-6" />
                      <span>BOOK VIA WHATSAPP</span>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-3 font-medium">
                  Enquiry will be sent to WhatsApp number <span className="font-bold text-brand-primary">+91 97909 98182</span>
                </p>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

