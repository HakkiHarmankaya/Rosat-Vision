import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './corporate.component.html',
  styleUrl: './corporate.component.css'
})
export class CorporateComponent {
  // External project domains from catalog
  readonly gesdronUrl = 'https://gesdron.net';
  readonly depronUrl = 'https://depron.org';

  // Navigation active state
  activeNavSection = 'hero';

  // Contact form state
  contactForm = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: 'gesdron',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.activeNavSection = sectionId;
    }
  }

  onSubmitContact(): void {
    if (!this.contactForm.fullName || !this.contactForm.email) {
      alert('Lütfen ad soyad ve geçerli e-posta adresinizi giriniz.');
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      setTimeout(() => {
        this.contactForm = {
          fullName: '',
          company: '',
          email: '',
          phone: '',
          interest: 'gesdron',
          message: ''
        };
        this.submitSuccess = false;
      }, 5000);
    }, 1200);
  }
}
