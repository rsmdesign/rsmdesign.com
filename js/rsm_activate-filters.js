const data = {
   markets: [
      "Mixed-Use Design",
      "Hospitality Signage Design",
      "Workplace Design",
      "Cultural Design",
      "Retail Environments & Graphic Design",
      "Sports & Entertainment",
      "Food & Beverage",
      "Park Wayfinding & Signage",
      "Civic Design",
      "Education Design",
      "Residential Community Signage",
      "Transit Design",
      "Healthcare Signage Design",
      "International Design",
      "Waterfront Wayfinding Design",
      "Streetscape Design",
      "Parking Garage Design",
      "Multifamily Design",
   ],
   services: [
      "Environmental Graphic Design",
      "Branding & Logo Design",
      "Wayfinding Signage Design",
      "Placemaking Design",
      "Public Art & Murals",
      "Donor Recognition Signage Design",
      "Master Sign Programs",
      "Digital Signage Integration",
      "Exhibit Wayfinding Design",
      "Architectural Graphic Design",
      "Experiential Graphic Design",
      "Criteria & Guidelines",
      "Project Visioning",
      "Analysis & Strategy",
      "Graphic Architecture",
      "Experiential Graphic Design",
      "Architectural Graphic Design",
   ],
   offices: ["San Clemente Studio", "Dallas Studio", "Los Angeles Studio", "Boulder Studio"],
   regions: [
      "China East Asia Region",
      "San Diego CA Region",
      "Nashville Tennessee Region",
      "Florida Region",
      "United Arab Emirates (UAE) Region",
      "Salt Lake City Utah Region",
      "Charlotte NC Region",
      "South America Region",
      "Central America Region",
      "Saudi Arabia Region",
      "Seattle WA Region",
      "Oregon Region",
      "Phoenix AZ Region",
      "Europe Region",
      "Southern California Region",
      "Hawaii Region",
      "San Francisco Region",
      "Washington D.C. Region"
   ],
   rsm: ["Women Owned Business"],
   topics: [
      "Awards",
      "Press",
      "Education",
      "RSM Culture",
      "Project Updates"
   ],
}

const queryKeys = {
   m: data.markets,
   s: data.services,
   o: data.offices,
   r: data.regions,
   e: data.rsm,
   t: data.topics,
}

const clickFilter = filter =>
   document.querySelector(`[filter-by="${filter}"]`).click()

const selectedFilters = []

const params = new URLSearchParams(window.location.search)
params.forEach((value, key) => {
   if (value) {
      value.split(',').forEach(id => {
         const filterText = queryKeys[key][id]
         selectedFilters.push(filterText)
      })
   }
})

if (selectedFilters.length === 1) {
   document.querySelectorAll('.sort-menu-wrapper > a > div').forEach(div => {
      if (div.textContent === selectedFilters[0]) {
         div.parentElement.click()
         console.log(div.parentElement)
         return
      }
   })
}

selectedFilters.forEach(filter => {
   clickFilter(filter)
})

// wait for javascript to finish loading posts into DOM
setTimeout(function() {
  const post_list = Array.from(document.querySelectorAll('#post_list .w-dyn-item'))
     .filter(x => x.style.display !== 'none')
     .map(x => x.querySelector('a'))
  const current_post = document.querySelector('.w--current');
  const current_post_idx = [].indexOf.call(post_list, current_post);
  const next_post = post_list[current_post_idx + 1];

  let next_href, next_title;

  if (next_post) {
    next_href = next_post.getAttribute('href');
    next_title = next_post.textContent;
  } else {
    // last post in list
    const first_post = post_list[0];
    next_href = first_post.getAttribute('href');
    next_title = first_post.textContent;
  }

  if (params.toString()) {
     next_href = next_href + '?' + params.toString();
  }

  //apply hrefs to next / previous buttons
  document.querySelector('#next_button').setAttribute('href', next_href);
  document.querySelector('#next_title').innerText = next_title;

  // hide post list for accessibility
  document.getElementById('post_list').style.display = 'none';
}, 5000);
