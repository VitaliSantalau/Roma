// info about parents
let parents = document.querySelector('.parents');
let parentsInfo = document.querySelector('.parents_info');

parents.onclick = function(e) {
  if (!e.target.classList.contains('open')) {
    /*parentsInfo.style.transform = 'translateY(0)';*/
    parents.classList.add('open');
  } else {
    /*parentsInfo.style.transform = 'translateY(-15.5em)';*/
    parents.classList.remove('open');

  }
}

// info about teacher
let teacher = document.querySelector('.teacher');
let teacherInfo = document.querySelector('.teacher_info');

teacher.onclick = function(e) {
  if (!e.target.classList.contains('open')) {
    /*teacherInfo.style.transform = 'translateY(0)';*/
    teacher.classList.add('open');
  } else {
    /*teacherInfo.style.transform = 'translateY(-13.5em)';*/
    teacher.classList.remove('open');

  }
}
