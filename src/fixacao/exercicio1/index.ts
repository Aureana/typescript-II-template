/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type TPersonal = {
  name: string,
  age: number,
  favoriteColor: string
}

enum FavoriteColor {
  BLUE = "blue",
  PINK = "pink",
  YELLOW = "yellow"
}


const pessoal1:TPersonal = {
  name: "igor",
  age: 25,
  favoriteColor: FavoriteColor.BLUE
}
const pessoal2:TPersonal = {
  name: "Maria",
  age: 15,
  favoriteColor: FavoriteColor.PINK
}
const pessoal3:TPersonal= {
  name: "Maria",
  age: 15,
  favoriteColor: FavoriteColor.YELLOW
}
console.table([pessoal1, pessoal2, pessoal3])




