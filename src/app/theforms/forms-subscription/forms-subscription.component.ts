import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
NavbarComponent

@Component({
  selector: 'app-forms-subscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './forms-subscription.component.html',
  styleUrl: './forms-subscription.component.css'
})
export class FormsSubscriptionComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      DataDeNascimento: [''],
      rg: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
  
      endereco: this.fb.group({
        cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        bairro: [''],
        rua: [''],
        numero: [''],
        complemento: ['']
      }),
      contato: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]]
      }),
      servicos: ['']
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Dados do formulário:', this.formulario.value);
      alert('Formulário enviado com sucesso!');
      this.formulario.reset();
    } else {
      alert('Por favor, preencha os campos obrigatórios!');
    }
  }
}
