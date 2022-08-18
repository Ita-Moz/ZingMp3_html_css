$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
const imgPlayer = $(".player-img");
const namePlayer = $(".media-name");
const authorPlayer = $(".media-author");
const audio = $("#audio");
const togglePlay = $(".toggle-play");
const progress = $(".process-bar");
const randomSong = $(".random-icon");
const backSong = $(".backward-icon");
const nextSong = $(".forward-icon");
const app = {
    currentIndex: 0,
    isPlay: false,
    songs: [
        {
            name: "Sing me to sleep",
            author: "Alan Walker",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
            id: 0,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
                },
            ],
        },
        {
            name: "Fade-NCS Release",
            author: "Alan Walker",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
            id: 1,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
                },
            ],
        },
        {
            name: "She-NCS Release",
            author: "Andromedik",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
            id: 2,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233",
                },
            ],
        },
        {
            name: "About you-NCS Release",
            author: "Ascence",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
            id: 3,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2",
                },
            ],
        },
        {
            name: "On & On (feat. Daniel Levi) [NCS Release]",
            author: "Cartoon",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
            id: 4,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb65d82d90b55b4dd3cbb2efd2",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
                },
            ],
        },
        {
            name: "Castle [NCS Release]",
            author: "Clarx & Harddope",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3",
            id: 5,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb015af0621865cd5cd5046c2c",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
                },
            ],
        },
        {
            name: "Invincible [NCS Release]",
            author: "DEAF KEV ",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3",
            id: 6,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb33b1cf2b7b544840b727865b",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1",
                },
            ],
        },
        {
            name: " Blank [NCS Release]",
            author: "Disfigure",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
            id: 7,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb2aa26cfdf3b785f171a4795c",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
                },
            ],
        },
        {
            name: "Nekozilla [NCS Release]",
            author: "Different Heaven",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
            id: 8,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb2af8bbb74cb106ac91d31c9a",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b27309065005b0fbfc4b320d05de",
                },
            ],
        },
        {
            name: "Savannah (feat. Philly K) [NCS Release]",
            author: "Diviners",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
            id: 9,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb2d530c07b6c9f629e3327175",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46",
                },
            ],
        },
        {
            name: "Cloud 9 [NCS Release]",
            author: "Itro & Tobu",
            url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836018974740/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3",
            id: 10,
            images: [
                {
                    url: "https://i.scdn.co/image/ab6761610000e5eb90533dd45388e25202c8de48",
                },
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273d6fd719531afda5f9cc0e248",
                },
            ],
        },
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
            <li class="music-list-item">
            <div class="music-song-left">
            <div style="background-image: url('${song.images[0].url}');" class="music-song-left-img">
            </div>
                <div class="music-song-left-title">
                    <h3 class="music-song-left-name">${song.name}</h3>
                    <span class="music-song-left-singer">${song.author}</span>
                </div>
            </div>
            <div class="music-song-center">
                <span>${song.name}</span>
            </div>
            <div class="music-song-right">
                <span class="music-song-right-tym"><i class="fas fa-heart songs-item-right-tym-first"></i></span>
                <span class="music-song-right-time">4.00</span>
            </div>
        </li>
            `;
        });
        $(".music-list").innerHTML = htmls.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    uploadCurrentSong: function () {
        audio.src = this.currentSong.url;
        imgPlayer.src = `${this.currentSong.images[0].url}`;
        namePlayer.textContent = this.currentSong.name;
        authorPlayer.textContent = this.currentSong.author;
        // set up lại thanh process ban đầu cho Song
        progress.value = 0;
    },
    formatTimer: function (number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number % 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },
    nextSong: function () {
        if (app.currentIndex == app.songs.length - 1) {
            app.currentIndex = 0;
        } else {
            app.currentIndex++;
        }
        app.uploadCurrentSong();
    },
    backSong: function () {
        if (app.currentIndex == 0) {
            app.currentIndex = app.songs.length - 1;
        } else {
            app.currentIndex--;
        }
        app.uploadCurrentSong();
    },
    handleEvents: function () {
        // START handleClickPlay
        togglePlay.onclick = function () {
            if (app.isPlay) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        //Handle Play khi Space
        window.addEventListener("keydown", function (e) {
            if (e.code == "Space") {
                if (app.isPlay == true) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
        });
        audio.onplay = function () {
            app.isPlay = true;
            $(".wrapper").classList.add("playing");
        };
        audio.onpause = function () {
            app.isPlay = false;
            $(".wrapper").classList.remove("playing");
        };

        // START handleClickNext
        nextSong.onclick = function () {
            app.nextSong();
            audio.play();
        };
        // START handleClickBack
        backSong.onclick = function () {
            app.backSong();
            audio.play();
        };
        // Handle khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const currentPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.textContent = `${currentPercent}`;
                progress.value = audio.currentTime;
                progress.max = audio.duration;
                //Set time-end song music
                $(".time-end").textContent = app.formatTimer(audio.duration);
                $(".time-start").textContent = app.formatTimer(audio.currentTime);
            }
        };
        // Handle khi tua bài hát
        progress.onchange = ()=> {
            audio.currentTime = progress.value;
        };

    },

    start: function () {
        // Định nghĩa thuộc tính currentSong cho Object
        this.defineProperties();

        this.handleEvents();

        this.uploadCurrentSong();
        // Render ra list bai hat
        this.render();
    },
};
app.start();
