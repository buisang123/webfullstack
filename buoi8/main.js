$("#search").on("submit",function(event){
    event.preventDefault();
    click = $("#keyword").val();
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${click}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
        type: "GET",
        success: function(data){
            pagetoken = data.nextPageToken;
            $("#result-list").empty();
            data.items.forEach(function(item){
                $("#result-list").append(`
                <a class="result col-md-12" href="https://youtube.com/watch?v=${item.id.videoId}?autoreplay=true" target="_blank">
                <img src="${item.snippet.thumbnails.high.url}" alt="">
                <div class="video_info">
                    <h2 class="title">${item.snippet.title}</h2>
                    <p class="description">${item.snippet.description}</p>
                    <span>View >></span>
                </div>
            </a>`)
            })
        },
        error: function(error){
          console.log(error);
        }
      })
  })
$(window).scroll( function(event){
    click = $("#keyword").val();
    var scrollHeight = $(document).height();
	    var scrollPosition = $(window).height() + $(window).scrollTop();
	    if ((scrollHeight - scrollPosition) / scrollHeight === 0){
    $.ajax({
        url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${click}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${pagetoken}`,
        type: "GET",
        success: function(subdata){
            subdata.items.forEach(function(subvalue){
                $("#result-list").append(`
                <a class="result col-md-12" href="https://youtube.com/watch?v=${subvalue.id.videoId}?autoreplay=true" target="_blank">
                <img src="${subvalue.snippet.thumbnails.high.url}" alt="">
                <div class="video_info">
                    <h2 class="title">${subvalue.snippet.title}</h2>
                    <p class="description">${subvalue.snippet.description}</p>
                    <span>View >></span>
                </div>
            </a>`)
            })
            pagetoken = subdata.nextPageToken;
        },
        error:function(error){
            console.log(error);
        }
    })
    }
  })








