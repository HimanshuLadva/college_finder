const collegeList = [
    {
        name: 'darshan',
        elirank: 8000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'A',
        elirank: 6000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'B',
        elirank: 5000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'C',
        elirank: 4000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'D',
        elirank: 3000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'E',
        elirank: 2000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'F',
        elirank: 1000,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'G',
        elirank: 500,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'H',
        elirank: 250,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
    {
        name: 'I',
        elirank: 100,
        city: 'San Francisco',
        mail: 'mail@darshan.ac.in',
        clgWeb: 'http://www.darshan.ac.in'
    },
]

const rank = document.getElementById('rnk');
const result = document.getElementById('result');

function getList() {

    if(rank.value) {
        const list = collegeList.filter((e) => e.elirank > rank.value);
        const listClg = list.map((item) => {
          return `
        <table class="result">
           <tr>
               <td>College Name</td>
               <td>${item.name}</td>
           </tr>
           <tr>
               <td>College ad rank</td>
               <td>${item.elirank}</td>
           </tr>
           <tr>
               <td>College Site</td>
               <td>${item.clgWeb}</td>
           </tr>
       </table>
        `;
        });

        result.innerHTML = listClg.join("\n");
    }
    else {
        alert('please enter your rank!!!!');
    }
    // body.classList.remove('detail');
}

