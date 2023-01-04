/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1
// type TPerson ={
//   id:string,
//   name: string,
//   email: string,
//   password: string,
//   role: "Admin" | "Normal" | "mais normal"
// }
// const userOne: TPerson = {
//   id:"01",
//   name: "Aure",
//   email:"aurea@gmail.com",
//   password: "123456",
//   role: "Normal"

// }
// const userTwo: TPerson = {
//   id:"02",
//   name: "Maicon",
//   email:"maicon@gmail.com",
//   password: "123456!",
//   role: "Normal"

// }

// //console.table([userOne, userTwo])
// console.table( userTwo)
// console.table( userTwo)

//1.2
type AdminAccount = {
   account: string| number
   permission: boolean
}
type NormalAccount = {
  account: string |number
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

//2.1
type TPerson ={
    id:string,
    name: string,
    email: string,
    password: string,
    role: Role
  }
enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}
const userOne:TPerson = {
  id:"01",
  name: "Aure",
  email:"aurea@gmail.com",
  password: "123456",
  role: Role.ADMIN

}
const userTwo:TPerson = {
  id:"02",
  name: "Maicon",
  email:"maicon@gmail.com",
  password: "123456!",
  role: Role.ADMIN

}

//2.2 Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type AdminUser = TPerson &  AdminAccount   

const userThree:AdminUser = {
  id: "03",
  name: "Victoria",
  email: "Victoria@gmail.com",
  password: "123456",
  role: Role.ADMIN,
  account: "admin1",
  permission: true
}
type NormalUser = TPerson & NormalAccount

const userFour:NormalUser = {
  id: "04",
  name: "Guilherme",
  email: "Guilhermea@gmail.com",
  password: "654321",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}

//3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
// E Guarde essas pessoas no array de usuários.

  const arrayUser: AdminUser[] | NormalUser[] = [userThree, userFour]  

 arrayUser.push(userThree)
 arrayUser.push(userFour)
 console.table(arrayUser)