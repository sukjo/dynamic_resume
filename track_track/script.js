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
  const leftcol = $("<div>", { id: "left" });
  const rightcol = $("<div>", { id: "right" });
  $("#main").append(leftcol);
  $("#main").append(rightcol);

  /* -------------------------------- section 1 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[1].tabURL)
    .done(function (data_1) {
      const sectionDiv = $("<div>", {
        id: `${sections[1].name}`,
        class: "section",
      });

      leftcol.append(`<h2>${sections[1].name}</h2>`);
      leftcol.append(sectionDiv);

      data_1.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          // update each of the below according to your own column names (e.g. "row.Company"). these are case-sensitive
          $(
            `<div class='item'><h3>
              ${row.Organization}
              </h3>
              <p class='position'>
              ${row.Position}
              </p>
              <div class="location-time">
                <p class='location'>
                ${row.Location}
                </p>
                <p class='time'>
                ${row.Time}
                </p>
              </div>
              <p class='description'>
              ${row.Description}
              </p></div>`
          ).appendTo(sectionDiv);
        }
      });
    })
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[2].tabURL);
    })
    .done(
      /* -------------------------------- section 2 ------------------------------- */
      function (data_2) {
        const sectionDiv = $("<div>", {
          id: `${sections[2].name}`,
          class: "section",
        });

        rightcol.append(`<h2>${sections[2].name}</h2>`);
        rightcol.append(sectionDiv);

        data_2.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><h3>
                ${row.Institution}
                </h3>
                <p class='degree'>
                ${row.Degree}
                </p>
              <div class="location-time">
                <p class='location'>
                ${row.Location}
                </p>
                <p class='time'>
                ${row.Time}
                </p>
              </div>
                <p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(sectionDiv);
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
        const sectionDiv = $("<div>", {
          id: `${sections[3].name}`,
          class: "section",
        });

        rightcol.append(`<h2>${sections[3].name}</h2>`);
        rightcol.append(sectionDiv);

        data_3.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><h3>
                ${row.Project}
                </h3>
                <p class='time'>
                ${row.Time}
                </p>
                <p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(sectionDiv);
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
        const sectionDiv = $("<div>", {
          id: `${sections[4].name}`,
          class: "section",
        });

        rightcol.append(`<h2>${sections[4].name}</h2>`);
        rightcol.append(sectionDiv);

        data_4.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class='item'><h3>
                ${row.Award}
                </h3>
                <p class='time'>
                ${row.Time}
                </p>
                <p class='description'>
                ${row.Description}
                </p></div>`
            ).appendTo(sectionDiv);
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
        const sectionDiv = $("<div>", {
          id: `${sections[5].name}`,
          class: "section",
        });

        rightcol.append(`<h2>${sections[5].name}</h2>`);
        rightcol.append(sectionDiv);

        data_5.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            // everything below this line looks a little different from the other sections because the 'skills' section has special formatting
            $(
              `<div class="${sections[5].name}-item"><p>${row.Skill}</p></div`
            ).appendTo(sectionDiv);
          }

          sectionDiv.css("margin", "1rem 0");
          $(`.${sections[5].name}-item`).css({
            margin: "0.3rem 0.8rem",
            display: "inline-block",
          });
          $(`.${sections[5].name}-item > p`).css({
            "font-size": "0.8rem",
          });
        });
      }
    );
  /* -------------------------------------------------------------------------- */
  /*                          add any new sections here                         */
  /* -------------------------------------------------------------------------- */
});
