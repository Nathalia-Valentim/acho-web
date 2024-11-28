import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavgreenComponent } from "../../shared/components/navbar/navgreen/navgreen.component";
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavgreenComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      cursosOferecidos: [''],
      diasFuncionamento: [''],
      horarioAtendimento: [''],
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

  voltarParaContateNav() {
    this.router.navigate(['../contate'], { relativeTo: this.router.routerState.root.firstChild }); 
  }
}