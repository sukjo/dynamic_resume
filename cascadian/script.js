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
      const containerDiv = $("<div>", {
        id: "section-1",
        class: "main-row",
      });

      $("#main").append(containerDiv);
      containerDiv.append(`<h2>${sections[1].name}</h2>`);

      data_1.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='item'>
              <div class='meta'>
                <h3>${row.Organization}</h3>
                <p class='position'>${row.Position}</p>
                <p class='time'>${row.Time}</p>
              </div>
              <div class='description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(containerDiv);
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
      const containerDiv = $("<div>", {
        id: "section-2",
        class: "main-row",
      });

      $("#main").append(containerDiv);
      containerDiv.append(`<h2>${sections[2].name}</h2>`);

      data_2.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='item'>
              <div class='meta'>
                <h3>${row.Institution}</h3>
                <p class='degree'>${row.Degree}</p>
              </div>
              <div class='description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(containerDiv);
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

      const containerDiv = $("<div>", {
        id: "section-3",
        class: "main-row",
      });

      $("#main").append(containerDiv);
      containerDiv.append(`<h2>${sections[3].name}</h2>`);

      data_3.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='item'>
              <div class='meta'>
                <h3><a href='${row.Link}' target='_blank' rel='noopener noreferrer'>${row.Project}</a></h3>
                <p class='time'>${row.Time}</p>
              </div>
              <div class='description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(containerDiv);
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

      const containerDiv = $("<div>", {
        id: "section-4",
        class: "main-row",
      });

      $("#main").append(containerDiv);
      containerDiv.append(`<h2>${sections[4].name}</h2>`);

      data_4.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          rowCount++;
          $(
            `<div class='item'>
              <div class='meta'>
                <h3>${row.Award}</h3>
                <p class='time'>${row.Time}</p>
              </div>
              <div class='description'>
                <p>${row.Description}</p>
              </div>
            </div>`
          ).appendTo(containerDiv);
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

      const containerDiv = $("<div>", {
        id: "section-5",
        class: "main-row",
      });

      const capFill = $("<div>", {
        id: "cap-fill",
      });

      $("#main").append(containerDiv);
      containerDiv.append(`<h2>${sections[5].name}</h2>`);
      containerDiv.append(capFill);

      data_5.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          $(`<p>${row.Skill}</p>`).appendTo(capFill);
        }
      });

      $(":root").css("--s5-row-count", rowCount);
    });
  /* -------------------------------------------------------------------------- */
  /*                        fill in any new sections here                       */
  /* -------------------------------------------------------------------------- */
});
