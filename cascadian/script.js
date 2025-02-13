let sections = {
  1: {
    name: "experience",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/2",
  },
  2: {
    name: "education",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/3",
  },
  3: {
    name: "projects",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/4",
  },
  4: {
    name: "awards",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/5",
  },
  5: {
    name: "skills",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/6",
  },
};

$(document).ready(function () {
  /* -------------------------------- section 1 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[1].tabURL)
    .done(function (data_1) {
      let rowCount = 0;
      const sectionDiv = $("<div>", {
        id: "section-1",
        class: "main__row",
      });

      $("#main").append(sectionDiv);
      sectionDiv.append(`<h2>${sections[1].name}</h2>`);

      data_1.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='section__item'>
              <div class='item__meta'>
                <h3>${row.Organization}</h3>
                <p class='position'>${row.Position}</p>
                <p class='time'>${row.Time} • ${row.Location}</p>
              </div>
              <div class='item__description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(sectionDiv);
        }
      });

      $(":root").css("--s1-row-count", rowCount);
    })
    /* -------------------------------- section 2 ------------------------------- */
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[2].tabURL);
    })
    .done(function (data_2) {
      let rowCount = 0;
      const sectionDiv = $("<div>", {
        id: "section-2",
        class: "main__row",
      });

      $("#main").append(sectionDiv);
      sectionDiv.append(`<h2>${sections[2].name}</h2>`);

      data_2.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='section__item'>
              <div class='item__meta'>
                <h3>${row.Institution}</h3>
                <p class='degree'>${row.Degree}</p>
                <p class='time'>
                ${row.Time}
                </p>
              </div>
              <div class='item__description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(sectionDiv);
        }
      });

      $(":root").css("--s2-row-count", rowCount);
    })
    /* -------------------------------- section 3 ------------------------------- */
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[3].tabURL);
    })
    .done(function (data_3) {
      let rowCount = 0;

      const sectionDiv = $("<div>", {
        id: "section-3",
        class: "main__row",
      });

      $("#main").append(sectionDiv);
      sectionDiv.append(`<h2>${sections[3].name}</h2>`);

      data_3.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='section__item'>
              <div class='item__meta'>
                <h3><a href='${row.Link}' target='_blank' rel='noopener noreferrer'>${row.Project}</a></h3>
                <p class='time'>${row.Time}</p>
              </div>
              <div class='item__description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(sectionDiv);
        }
      });

      $(":root").css("--s3-row-count", rowCount);
    })
    /* -------------------------------- section 4 ------------------------------- */
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[4].tabURL);
    })
    .done(function (data_4) {
      let rowCount = 0;

      const sectionDiv = $("<div>", {
        id: "section-4",
        class: "main__row",
      });

      $("#main").append(sectionDiv);
      sectionDiv.append(`<h2>${sections[4].name}</h2>`);

      data_4.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='section__item'>
              <div class='item__meta'>
                <h3>${row.Award}</h3>
                <p class='time'>${row.Time}</p>
              </div>
              <div class='item__description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(sectionDiv);
        }
      });

      $(":root").css("--s4-row-count", rowCount);
    })
    /* -------------------------------- section 5 ------------------------------- */
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[5].tabURL);
    })
    .done(function (data_5) {
      let rowCount = 0;

      const sectionDiv = $("<div>", {
        id: "section-5",
        class: "main__row",
      });

      // everything below this line looks a little different from the other sections because the 'skills' section has special formatting
      const skillsCols = $("<div>", {
        id: "skills__columns",
      });

      $("#main").append(sectionDiv);
      sectionDiv.append(`<h2>${sections[5].name}</h2>`);
      sectionDiv.append(skillsCols);

      data_5.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          $(`<p>${row.Skill}</p>`).appendTo(skillsCols);
        }
      });

      $(":root").css("--s5-row-count", rowCount);
    });
  /* -------------------------------------------------------------------------- */
  /*                          add any new sections here                         */
  /* -------------------------------------------------------------------------- */
});
