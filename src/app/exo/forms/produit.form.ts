import { AbstractControl , ValidationErrors ,Validators } from "@angular/forms";

export const PRODUIT_INSERT_FORM = {
    'marque': ['', Validators.required, Validators.minLength(2)],
      'prix': [0, Validators.min(0)],
      'modele': [undefined, [Validators.minLength(1), Validators.maxLength(30)]],
      'stock': [1, [Validators.min(1), Validators.max(98)]],
      'en_vente' : [true]
}

function pair(control: AbstractControl) : ValidationErrors | null {
    if( !control.value || control.value % 2 == 0 )
        return null;

    return {
        pair: {
            message: 'devrait être pair'
        }
    }
}

export function priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
    const prix = control.value.prix;
    const stock = control.value.stock;

    if( prix >= 2*stock )
        return null;

    return {
        priceDoubleStock: {
            prix: prix,
            stock: stock,
            message: 'le prix doit être au moins le double du stock...'
        }
    }
}
