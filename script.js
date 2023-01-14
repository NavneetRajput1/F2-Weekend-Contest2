const arr = []

function add() {
    const name = document.getElementById('name').value;
    const proffession = document.getElementById('proffession').value;
    const age = document.getElementById('age').value;

    console.log(name, proffession, age);


    if (name === '' || proffession === '' || age === '') {
        const mark = document.getElementById('mark')
        mark.style.color = 'red';

        mark.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        mark.style.marginLeft = '28px';
    } else {
        mark.innerHTML = 'Success : Employee Added!'
        mark.style.color = 'green';
        mark.style.marginLeft = '30px';


        
        const ark = document.getElementById('ark')
        ark.style.display = 'none';

        arr.push({
            name: name,
            proffession: proffession,
            age: age,})
    }

    let tb = document.getElementById('tb')
    tb.innerHTML = '';

    arr.map((elel, i)=> {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${elel.name}</td>
        <td>Profession:${elel.proffession}</td>
        <td>Age:${elel.age}</td>
        <td><button onclick=del(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
        
`
    })

}

function del(elel) {
    delete arr[elel]
    tb.innerHTML = ''
    arr.map((elel, i)=> {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${elel.name}</td>
        <td>Profession:${elel.proffession}</td>
        <td>Age:${elel.age}</td>
        <td><button onclick=del(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
`
    })
}
console.log(tb)