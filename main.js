/* Kullanıcı Listesi Tanımlama: Başlangıçta users dizisinde bazı kullanıcılar tanımlanır.
İşlem Seçimi: Kullanıcıdan "giriş", "kayıt" veya "çık" seçeneklerinden birini seçmesi istenir.
Giriş Yapma: Kullanıcı adı ve şifre girilerek, sistemdeki kullanıcılarla karşılaştırılır. Eğer doğruysa giriş başarılıdır.
Kayıt Olma: Yeni bir kullanıcı adı ve şifre ile kayıt yapılır. Ancak, kullanıcı adı daha önce alınmışsa, başka bir ad seçmesi istenir.
Çıkış Yapma: "Çık" komutu ile program sonlanır. */

const allUsers = [
  {
    name: "Edanur",
    surname: "Korkmaz",
    email: "edanuurkorkmaz@gmail.com",
    password: "123456",
  },
  {
    name: "Elif",
    surname: "Güner",
    email: "elifgunerek@gmail.com",
    password: "123456",
  },
];

alert(
  "To enter, write your email and password if you don't have an account please sign up or exit."
);
const choose = prompt("Enter/Sign up/Exit").toLowerCase();

if (choose === "enter") {
  const isEmailInTheSystem = prompt("Email: ");
  const isPasswordInTheSystem = prompt("Password: ");

  for (const users of allUsers) {
    if (
      users.email === isEmailInTheSystem &&
      users.password === isPasswordInTheSystem
    ) {
      alert("You've entered the system.");
      break;
    } else {
      alert("You've entered wrong information.");
      break;
    }
  }
} else if (choose === "sign up") {
  let newName = prompt("Name: ");
  let newSurname = prompt("Surname ");
  let newEmail = prompt("Email: ");
  let newPassword = prompt("Password: ");
  const newUser = {
    name: newName,
    surname: newSurname,
    email: newEmail,
    password: newPassword,
  };
  for (const users of allUsers) {
    if (users.email === newEmail) {
      alert("That email is taken. Choose another email.");
      break;
    } else {
      alert("Welcome to the system.");
      allUsers.push(newUser);
      break;
    }
  }

  console.log(allUsers);
} else if (choose === "exit") {
  alert("Goodbye.");
} else {
  alert("You can not enter that!");
}
