const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const coursesList = document.querySelector('#courses-list');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () => {
    nameInput.value = '';
    ratingInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    console.log('Click');
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;

    if(enteredName.trim().length <= 0 || enteredRating < 0 || enteredRating >5 || enteredRating.trim().length <= 0){
        console.log('Validation Error');
       alertCtrl.create({
           message: 'Please enter a valid course name and rating between 0 and 5',
           header: 'Invalid input',
           buttons: ['Okay']
       }).then(alertElement => {
           alertElement.present();
       });
       return
    }
    console.log('Passed Validation');
    console.log(enteredName, enteredRating);
    const newCourse = document.createElement('ion-item');
    // newCourse.textContent = enteredName + ' - ' + enteredRating + '/5';
    newCourse.innerHTML = `
    <strong>${enteredName}</strong>
    &nbsp-&nbsp
    ${enteredRating}/5
    <ion-icon slot="start" name="close" style="display: hidden;" class="removeItem">
    `;

    coursesList.appendChild(newCourse);

    clear();
});

cancelBtn.addEventListener('click', clear);