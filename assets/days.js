const from = new Date(2014, 10, 20)

const to = new Date(2044, 10, 20)

function datediff(first, second) {
    var days = Math.round((second-first)/(1000*60*60*24))
    return new Intl.NumberFormat('de-DE').format(days)

}

$("#since").text(datediff(from, Date.now()))

$("#until").text(datediff(Date.now(), to))
