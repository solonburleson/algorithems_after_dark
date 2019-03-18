if (navigator.mediaDevices.getUserMedia) {       
					navigator.mediaDevices.getUserMedia({video: true})
					.then(function(stream) {
						console.log(stream)
						console.log(typeof stream)
						// var cat = {name:"Ralph",size:"Large"} //comment this line out
						var stream_data = JSON.stringify(stream) // JSON.stringify(stream)
						console.log(stream_data)// console.log("Received cat data", cat, cat_data, typeof cat_data) //can comment out
						$.ajax({
							type: "GET",
							url: '/retrieve_cat', // url: '/live_check'
							data: {browser_feed:stream_data}, // data:{browser_feed:stream}
							dataType: 'json',
							contentType: "application/json; charset=utf-8"
						});
					})
					.catch(function(err0r) {
						console.log("Something went wrong!");
					});
				}