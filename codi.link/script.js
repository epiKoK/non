const options = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '82428af160mshcc5be7e786ec965p18857bjsn749f3bf867df',
		'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
	}
};
const fetchIpInfo = (ip) => {
   return fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, options)
   .then(res => res.json())
   .catch(err => console.error(err))
}

const $form = document.querySelector("#form")
console.log($form)
const $input = document.querySelector("#input")
const $sumbit = document.querySelector("#submit")
const $results = document.querySelector("#results")

$form.addEventListener("submit" , async (event) => {
  console.log("aasdas")
  event.preventDefault()
  const {value} = $input
  if(!value) return

  $sumbit.setAttribute("disabled", "")
  $sumbit.setAttribute("aria-busy", "true")

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }
  $sumbit.removeAttribute("disabled")
  $sumbit.removeAttribute("aria-busy")
})