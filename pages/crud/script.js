let clickedIndexTrigger = -1;

let tbl = document.getElementById('sampleTable'); // MODIFY TABLE HEADER WIDTH
let td = tbl.rows[0].cells[4];
td.width = '160px';

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('sampleForm').addEventListener('submit', upsert)
})

function goBack() {
    window.location.href = '../../index.html'
}


function upsert(e){

    e.preventDefault(); // stop the page reloading
    let sampleForm = e.target;
    let fd = new FormData(sampleForm)
    // convertFD2JSON(fd)

    if (clickedIndexTrigger === -1){
            // Insert The New Data in HTML
        let table = document.getElementById("sampleTable");
        let row = table.insertRow(-1)

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = fd.get('firstName');
        cell2.innerHTML = fd.get('lastName');
        cell3.innerHTML = fd.get('age');
        cell4.innerHTML = fd.get('status');
        cell5.innerHTML = `<button class="btn btnred" onClick="deleteData(this.parentElement.parentElement)">Delete</button>
                            <button class="btn btngreen" onClick="updateData(this.parentElement.parentElement)">Update</button>`;

    }else
    {
        let selectedRow = document.getElementById('sampleTable').rows[clickedIndexTrigger];
        selectedRow.cells[0].innerHTML = fd.get('firstName');
        selectedRow.cells[1].innerHTML = fd.get('lastName');
        selectedRow.cells[2].innerHTML = fd.get('age');
        selectedRow.cells[3].innerHTML = fd.get('status');
        
    }
    clearData(); 
}

function updateData(clickedIndex){
    clickedIndexTrigger = clickedIndex.rowIndex
    let selectedRow = document.getElementById('sampleTable').rows[clickedIndexTrigger];
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML
    document.getElementById("age").value = selectedRow.cells[2].innerHTML
    document.getElementById("status").value = selectedRow.cells[3].innerHTML
}

function deleteData(clickedIndex){
    clickedIndexTrigger = -1;
    document.getElementById("sampleTable").deleteRow(clickedIndex.rowIndex); // TABLE ROW COUNT START TO ONE
    clearData();
   
}

function clearData(){
    clickedIndexTrigger = -1;
    document.getElementById("firstName").value = ''
    document.getElementById("lastName").value = '';
    document.getElementById("age").value = '';
    document.getElementById("status").value = 'Unmarried';
}

// function convertFD2JSON(formData){
//     let obj = {};
//     for (let key of formData.keys()){
//         obj[key] = formData.get(key);
//     }
//     return obj;
// }