import expressoTradicional from "../../../../assets/products/expresso-tradicional.png";
import expressoAmericano from "../../../../assets/products/expresso-americano.png";
import expressoCremoso from "../../../../assets/products/expresso-cremoso.png";
import expressoGelado from "../../../../assets/products/expresso-gelado.png";
import cafeComLeite from "../../../../assets/products/cafe-com-leite.png";
import latte from "../../../../assets/products/latte.png";
import capuccino from "../../../../assets/products/capuccino.png";
import macchiato from "../../../../assets/products/macchiato.png";
import mocaccino from "../../../../assets/products/mocaccino.png";
import chocolateQuente from "../../../../assets/products/chocolate-quente.png";
import cubano from "../../../../assets/products/cubano.png";
import havaiano from "../../../../assets/products/havaiano.png";
import arabe from "../../../../assets/products/arabe.png";
import irlandes from "../../../../assets/products/irlandes.png";

export const coffees = [
    {
        type: "Tradicional",
        img: expressoTradicional,
        title: "Expresso Tradicional",
        subtitle: "O tradicional café feito com água quente e grãos moídos",
        value: 9.90
    },
    {
        type: "Tradicional",
        img: expressoAmericano,
        title: "Expresso Americano",
        subtitle: "Expresso diluído, menos intenso que o tradicional",
        value: 9.90
    },
    {
        type: "Tradicional",
        img: expressoCremoso,
        title: "Expresso Cremoso",
        subtitle: "Café expresso tradicional com espuma cremosa",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "gelado",
        img: expressoGelado,
        title: "Expresso Gelado",
        subtitle: "Bebida preparada com café expresso e cubos de gelo",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "com leite",
        img: cafeComLeite,
        title: "Café com Leite",
        subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "com leite",
        img: latte,
        title: "Latte",
        subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "com leite",
        img: capuccino,
        title: "Capuccino",
        subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "com leite",
        img: macchiato,
        title: "Macchiato",
        subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
        value: 9.90
    },
    {
        type: "Tradicional",
        type2: "com leite",
        img: mocaccino,
        title: "Mocaccino",
        subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
        value: 9.90
    },
    {
        type: "Especial",
        type2: "com leite",
        img: chocolateQuente,
        title: "Chocolate Quente",
        subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
        value: 9.90
    },
    {
        type: "Especial",
        type2: "Alcoólico",
        type3: "Gelado",
        img: cubano,
        title: "Cubano",
        subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        value: 9.90
    },
    {
        type: "Especial",
        img: havaiano,
        title: "Havaiano",
        subtitle: "Bebida adocicada preparada com café e leite de coco",
        value: 9.90
    },
    {
        type: "Especial",
        img: arabe,
        title: "Árabe",
        subtitle: "Bebida preparada com grãos de café árabe e especiarias",
        value: 9.90
    },
    {
        type: "Especial",
        type2: "Alcoólico",
        img: irlandes,
        title: "Irlandês",
        subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        value: 9.90
    },
]