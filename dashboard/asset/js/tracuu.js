var btnCloseModalHD = document.querySelector('.btn-close-modalHD');
var btnOpenModalHD = document.querySelector('.btn-open-iframe');
const modalHD = document.querySelector('.modal-iframe-hd');

btnOpenModalHD.addEventListener('click', function(){
    modalHD.classList.toggle('open');
})

btnCloseModalHD.addEventListener('click', function(){
    modalHD.classList.toggle('open');
})

let xmlContent = '';
let tableInvoice = document.getElementById('invoice');
let fileup = document.getElementById('upload');

fileup.onchange = event => {
    const files = event.target.files
    
    fetch('/dashboard/asset/js/' + files[0].name)
    .then(response =>{

        response.text().then((xml) => {
            xmlContent = xml;

            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
            let inv = xmlDOM.querySelectorAll('Content');

            inv.forEach(invXmlNode => {
                
            let row = document.createElement('tr');
            row.classList.add('table-brief-content');

            let td = document.createElement('td');
            td.innerText = 1;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = invXmlNode.children[2].innerHTML;
            row.appendChild(td);
            
            td = document.createElement('td');
            td.innerText = invXmlNode.children[3].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = invXmlNode.children[4].innerHTML;
            row.appendChild(td);
            
            td = document.createElement('td');
            td.innerText = invXmlNode.children[5].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = invXmlNode.children[6].innerHTML;
            row.appendChild(td);

            td = document.createElement('td');
            td.innerText = invXmlNode.children[23].innerHTML;
            row.appendChild(td);

            tableInvoice.children[0].appendChild(row);
            });
            
        });
        
    });
  }

