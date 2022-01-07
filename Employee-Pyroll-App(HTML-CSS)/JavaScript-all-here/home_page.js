window.addEventListener('DOMContentLoaded' , (Event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th>Profile Picture</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
    <tr>
            <td>
                <img class="profile" src="../Assets-all-here/Ellipse -2.png" alt="">
            </td>
            <td>Nikhil Patil</td>
            <td>Male</td>
            <td>
                <div class='dept-label'>Engineer</div>
                <div class='dept-label'>Engineering</div>
            </td>
            <td>400000</td>
            <td>1 Jan 2022</td>
            <td>
                <img id="1" src="../Assets-all-here/delete-black-18dp.svg" alt="delete">
                <img id="1" src="../Assets-all-here/create-black-18dp.svg" alt="">
            </td>
        </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}