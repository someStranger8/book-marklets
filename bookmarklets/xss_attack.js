
javascript:(function()%7Bvar j %3D document.getElementsByTagName("input")%3Bif (document.location.href.indexOf("%3F")>-1)%7Bvar l %3D "%26"%3B%7Delse%7Bvar l %3D "%3F"%3B%7Dfor (i%3D0%3Bi<j.length%3Bi%2B%2B)%7Bl%2B%3Dj%5Bi%5D.getAttribute("name")%2B'%3D"><test1234>%26'%7Ddocument.location %3D document.location%2Bl%7D)()
