function submitForm(e){
  e.preventDefualt();

  let name = document.querySelector(".Nombre").value;
  let mail = document.querySelector(".Mail").value;
  let message = document.querySelector(".Mensaje").value;
  
  document.querySelector(".contact-form").reset();

  sendEmail(name, mail, message);

}
//envia el email y su información
function sendEmail(name, mail, message){
  Email.send({
    HOST: "smpt.gmail.com",
    Username: 'supprotahost@gmail.com',
    Password: "cctpzageajkxduvu",
    To: 'ferrantenb@gmail.com',
    From: 'supprotahost@gmail.com',
    Subject: `${name} te ha enviado un mensaje desde tu sitio`,
    Body:`Nombre: ${name} </br> Mail: ${mail} </br> Mensaje: ${message}`,

  }).then((message) => alert("Su mensaje ha sido enviado"))


}