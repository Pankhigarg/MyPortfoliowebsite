var typed = new Typed('#element',{strings: ['Web Development Enthusiast'],
typeSpeed:50,
backSpeed:100,
delaySpeed:100,
loop:true,
});
    function openLink(url) {
        window.open(url, '_blank');
    }
    function openPDF(pdfPath) {
        window.open(pdfPath, '_blank');
      }

//     let contactform=document.getElementById('contactForm');
//     let table_content=document.getElementById('table_content');
//     let contactTableBody=document.getElementById('contact-table-body');
//     let toggleTableBtn=document.getElementById('toggle-table-btn');
//     contact.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//    let phoneNo = document.getElementById('phone_no').value;  
//    let city = document.getElementById('city').value;  
//    let message = document.getElementById('your_message').value;  

//    let row = document.createElement('tr');
// 	row.innerHTML = `
		
//     <th>${No}</th>
//     <th>${fullName}</th>
//     <th>${email}</th>
//     <th>${city}</th>
//     <th>${phoneNO}</th>
//     <th>${message}</th>`;
//    table_content.contactTableBody.appendChild(row);
//  });


// toggleTableBtn.addEventListener('click', () => {
//     table_content.classList.toggle('hidden');
// });
let done = document.getElementById('submitButton');
function alertsubmit(){
    alert("your message is sent!");
}
    
done.addEventListener('click',  alertsubmit); 
       
