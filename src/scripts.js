
let userRepo = new UserRepo(userData);
let randomUser = Math.round(Math.random() * (50 - 1) + 1);
let infoFromUser = userRepo.returnUserID(randomUser);
let user = new User(infoFromUser);
let hydration = new Hydration(hydrationData);


let firstName = user.returnFirstName();
$('.first-name').html(firstName);

$('.id-from-user').html(randomUser);

$('.day-water-consumption').html(hydration.dayFluidOz("2019/06/17") )
// See how we can change the dates based of random
// We can randomise the dates


hydration.fluidOzWeekly(randomUser).forEach((ounce) => {
  console.log(ounce);
  $('.daily-water-per-week').append(`<p> ${ounce} </p>`);
});


$('.avg-users-stepgoal').html(userRepo.returnAvgStepGoal());