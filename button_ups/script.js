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
      const containerDiv = $("<div>", {
        id: `${sections[1].name}`,
      });

      $("#main").append(`<h2>${sections[1].name}</h2>`);
      $("#main").append(containerDiv);

      data_1.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          // update each of these according to your own column names (e.g. "row.Company"). these are case-sensitive
          $(
            `<div class='item'><div class="item-header"><h3>
              ${row.Organization}, ${row.Location}
              </h3>
              <p>
              ${row.Time}
              </p>
              </div>
              <p class='position'>
              ${row.Position}
              </p><p class='description'>
              ${row.Description}
              </p></div>`
          ).appendTo(containerDiv);
        }
      });
    })
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[2].tabURL);
    })
    .done(
      /* -------------------------------- section 2 ------------------------------- */
      function (data_2) {
        const containerDiv = $("<div>", {
          id: `${sections[2].name}`,
        });

        $("#main").append(`<h2>${sections[2].name}</h2>`);
        $("#main").append(containerDiv);

        data_2.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><div class="item-header"><h3>
                ${row.Institution}, ${row.Location}
                </h3>
                <p>
                ${row.Time}
                </p>
                </div>
                <p class='degree'>
                ${row.Degree}
                </p><p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(containerDiv);
          }
        });
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[3].tabURL);
    })
    .done(
      /* -------------------------------- section 3 ------------------------------- */
      function (data_3) {
        const containerDiv = $("<div>", {
          id: `${sections[3].name}`,
        });

        $("#main").append(`<h2>${sections[3].name}</h2>`);
        $("#main").append(containerDiv);

        data_3.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><div class="item-header"><h3>
                ${row.Project}
                </h3>
                <p>
                ${row.Time}
                </p>
                </div>
                <p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(containerDiv);
          }
        });
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[4].tabURL);
    })
    .done(
      /* -------------------------------- section 4 ------------------------------- */
      function (data_4) {
        const containerDiv = $("<div>", {
          id: `${sections[4].name}`,
        });

        $("#main").append(`<h2>${sections[4].name}</h2>`);
        $("#main").append(containerDiv);

        data_4.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><div class="item-header"><h3>
                ${row.Award}
                </h3>
                <p>
                ${row.Time}
                </p>
                </div>
                <p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(containerDiv);
          }
        });
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[5].tabURL);
    })
    .done(
      /* -------------------------------- section 5 ------------------------------- */
      function (data_5) {
        const containerDiv = $("<div>", {
          id: `${sections[5].name}`,
        });
        const list = $("<ul>", {
          id: "skills-list",
        });
        list.appendTo(containerDiv);

        $("#main").append(`<h2>${sections[5].name}</h2>`);
        $("#main").append(containerDiv);

        data_5.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(`<li>${row.Skill}</li>`).appendTo(list);
          }
        });
      }
    );
  /* -------------------------------------------------------------------------- */
  /*                        fill in any new sections here                       */
  /* -------------------------------------------------------------------------- */
});
