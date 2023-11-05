


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const AppMusic = $('.AppMusic')

const homeBtn = $('.heading-controler .backBtn')
const listBtn = $('.heading-controler .listBtn')
const pageHome = $('.home')
const pageList = $('.playlist')
const audio = $('#audio')
const headingMusicName = $('.dashboard h2')
const headingMusicSinger = $('.dashboard h3')
const headingMusicTime = $('#musicTime')
const headingMusicTimeStart = $('#timeStart')
const headingCdThumb = $('.cd img')
const playBtn = $('.play')
const play2Btn = $('.play2')
const playPause = $('.footer-controler')
const play2Pause = $('.songLive')
const progress = $('.progress')
const prevMusic = $('.prevMusic')
const prevTime  = $('.prevTime')
const nextMusic = $('.nextMusic')
const nextTime = $('.nextTime')
const repeatBtn = $('.repeatBtn')
const randomBtn = $('.randomBtn')
const playlist = $('.playlist')
const playListName = $('.heading-controler p')
const songLive = $('.songLive')
const songLiveName = $('.songLive .dashboard h2')
const songLiveSinger = $('.songLive .dashboard h3')
const closeBtn = $('.songLive .close')
const volumn = $('#volumnSlider')
const volumnBtn = $('.volumn')
const volumnOn = $('.volumnOn')
const offVolumn = $('.offVolumn')

const optionHeading = $('.option')
const optionMenu = $('.options')
const lyricsBtn = $('.lyricsBtn')
const pageLyrics = $('.lyrics')
const lyricName = $('.dashboard1 h2')
const lyricsSinger = $('.dashboard1 h3')
const lyrics = $('.dashboard1 p')
const lyricsHeading = $('.heading-controler p')
const dowloadBtn = $('.dowloadBtn')

const playlistTime = $('.playlistOption p') 




function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    
    const formattedTime = `${minutes}:${remainderSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isVolumn:false,
    songs: [
        {
            name:'MUSIC RUNNING',
            singer:'Nguyễn Hữu Hoàng',
            path: './music/nhacchaybo.mp3',
            image: './img/nhacngheditam.jpg',
            time: 4864,
            lyrics:`mang giày vào chạy bộ thôi`
        },
        {
            name: 'Cắt Đôi Nỗi Sầu',
            singer: 'Buồng Phòng Band',
            path: './music/catdoinoisau.mp3',
            image: './img/catdoinoisauu.jpg',
            time: 203,
            lyrics: `Cắt đôi nỗi sầu
            Anh buông tay cắt đôi nỗi sầu
            Anh cắt đi cả bóng hình
            Anh mang theo bên mình bấy lâu
            Nỗi đau đã cạn
            Cơn mưa trong tim cũng đã tan
            Anh bán đi mọi nỗi buồn
            Để chẳng còn gì ngoài thanh thản
            Em ơi anh muốn
            Mỗi tối đến anh không phải thất tình
            Muốn quên một bóng hình
            Em để lại, trong tim
            Anh không thể đếm
            Đã có bấy nhiêu đêm phải kiếm tìm
            Kiếm thêm một lí do
            Cho cuộc tình không tên
            Anh đã thức, thức xuyên đêm
            Anh đã cố gắng để quên em
            Nhưng anh biết
            Trong con tim anh không đành
            Màn đêm xuống, muốn buông tay
            Sầu giăng kín nỗi nhớ đong đầy
            Anh đang chết dần ngày từng ngày
            Em ơi
            Nhớ em rất nhiều
            Em ơi anh nhớ em rất nhiều
            Anh nhớ hơn cả nhớ nhà
            Nhưng em đâu nhớ gì đến ta
            Lúc yêu chẳng hiểu
            Khi chia li sẽ đau rất nhiều
            Đau đến trong tận linh hồn
            Và cuộc đời một màu băng giá
            Em ơi anh muốn
            Mỗi tối đến anh không phải thất tình
            Muốn quên một bóng hình
            Em để lại, trong tim
            Anh không thể đếm
            Đã có bấy nhiêu đêm phải kiếm tìm
            Kiếm thêm một lí do
            Cho cuộc tình không tên
            Anh đã thức, thức xuyên đêm
            Anh đã cố gắng để quên em
            Nhưng anh biết
            Trong con tim anh không đành
            Màn đêm xuống, muốn buông tay
            Sầu giăng kín nỗi nhớ đong đầy
            Anh đang chết dần ngày từng ngày
            Em ơi`
        },
        {
            name: 'Đâu Ai Dám Hứa',
            singer: 'Paracel Band',
            path: './music/dauaidamhua.mp3',
            image: './img/dauaidamhuaa.jpg',
            time: 224,
            lyrics: `Chiều dần buông tan trường anh đến để chờ nàng thơ đi học ra 
            Thì ra em đang ngồi trên chiếc xe đạp của ai không phải anh
            Anh như muốn tắt luôn công tắc gật đầu
            Vì trông thấy em đang cười đùa cùng ai khác
            
            Cũng chẳng thể trách em chọn ai đó hai mình đã có cái gì đâu
            Người ta duyên nhiều tiền   cao to  muôn phần hơn anh ôi giồi ôi  chán luôn
            Làm sao anh có thể có được người yêu xinh 
            
            Làm sao anh có thể biết cảm giác em lúc này
            Chỉ anh mới thấy phút yếu đuối trong mắt em thơ ngây rất nhiều lần  mỗi ngày
            Bên em là hạnh phúc sao ai kia không quan tâm
            
            Thằng kia có hứa sẽ chăm lo  sẽ đón em mỗi chiều
            Dù cho việc đó có khó  đến mức để em trông ngóng nhiều ngày rất nhiều ngày
            Chỉ cần được nắm tay em đến muôn nơi đâu ai dám hứa….
            
            Cũng chẳng thể trách em chọn ai đó hai mình đã có cái gì đâu
            Người ta duyên nhiều tiền  cao to muôn phần hơn anh ôi giồi ôi chán luôn
            Làm sao anh có thể có được người yêu xinh 
            
            Làm sao anh có thể biết cảm giác em lúc này
            Chỉ anh mới thấy phút yếu đuối trong mắt em thơ ngây rất nhiều lần  mỗi ngày
            Bên em là hạnh phúc sao ai kia không quan tâm
            
            Thằng kia có hứa sẽ chăm lo  sẽ đón em mỗi chiều
            Dù cho việc đó có khó  đến mức để em trông ngóng nhiều ngày rất nhiều ngày
            Chỉ cần được nắm tay em đến muôn nơi đâu ai dám hứa….
            
            Anh tuy nghèo thật không có nhiều tiền để lo cho em cuộc sống mới
            Hôm nay là vậy liệu rằng ngày mai anh có được tất cả em có trở về bên anh
            
            Làm sao anh có thể biết cảm giác em lúc này
            Chỉ anh mới thấy phút yếu đuối trong mắt em thơ ngây rất nhiều lần  mỗi ngày
            Bên em là hạnh phúc sao ai kia không quan tâm
            
            Thằng kia có hứa sẽ chăm lo  sẽ đón em mỗi chiều
            Dù cho việc đó có khó  đến mức để em trông ngóng nhiều ngày rất nhiều ngày
            Chỉ cần được nắm tay em đến muôn nơi  đâu ai dám hứa….`
        },
        {
            name: 'Hit Me Up',
            singer: 'Hoangz',
            path: './music/hitmeup.mp3',
            image: './img/hoangmeup.jpg',
            time: 336,
            lyrics: `Phone cho anh những lúc em một mình
            Sau đó làm gì thì gặp rồi sẽ biết
            Không ai mang cho em feeling nhiều vậy
            Anh biết anh sẽ là người làm em điên
            
            Trời dù mưa, đường có đông, nhà có xa anh cũng qua
            Chỉ cần nói là em đang không thấy vui anh sẽ tới
            Đứng trước cửa nhà em nhìn thấy trên camera
            Casablanca tay anh mang hoa, khoác pijama ra đón anh vào nhà
            
            Oh ah chưa kịp say hi vồ lấy nhau như bao lâu chưa gặp gỡ
            Nói bên tai "anh chưa đi em đã nhớ" và trong bếp trên bàn trước gương sofa.
            Hit me up when no one's a- round, we gon- na do things u already know
            Ain't nobody ever gave you this kinda love, and I'm that one you already know
            
            When it rains on your nights let me be your sunshine
            When it's darkness in my song I'll let you be the dawn
            Nhấc máy lên call anh, số anh em đã có
            Rót ít vang ra nhạc slow và hương nến
            
            Uống tí thôi đủ để thấy thành phố kia mờ
            Hit me up, anh đến đó ngay
            Bởi vì nếu hôm nay em cảm thấy sexy girl
            Thì anh nghĩ em nên ở ngay cạnh next to me
            
            Và trong phòng khách trên bàn trước gương ngoài ban công
            Phone cho anh những lúc em cần gặp sau đó gặp rồi làm gì từ từ tính
            Không ai mang cho em feeling nhiều vậy anh biết
            Hit me phone cho anh những lúc em cần gặp sau đó gặp rồi làm gì từ từ tính
            
            Không ai mang cho em feeling nhiều vậy, anh biết anh sẽ là người làm em go crazy
            Trời dù mưa, đường có đông, nhà có xa, em ơi anh sẽ qua ngay chỉ cần em muốn
            Chỉ cần nói là em đang không thấy vui.
            Oh baby, anh sẽ đến ngay`
        },
        {
            name: 'Lệ Lưu Ly',
            singer: 'Parze Ocean Band',
            path: './music/leluuly.mp3',
            image: './img/anh em.jpg',
            time: 202,
            lyrics: `Em có gì đâu ngoài những vết thương sâu
            Yêu bao nhiêu lâu mà vẫn cứ thấy đau
            Gieo bao tương tư nặng ôm những nỗi buồn
            Em trao tim em rồi đem bán linh hồn
             
            Để đổi lấy đôi phút bình yên
            Dẫu nước mắt ướt gối hằng đêm
            Mà em ơi hi sinh vậy có xứng đáng?
             
            Vết bầm trên người em nhiều thêm
            Chẳng có lấy một ngày ấm êm
            Chỉ còn tai ương thâu đêm
            Không còn tương lai đâu em!
             
            Em ơi dừng lại khi nắng đã phai
            Dừng lại khi em bước sai
            Dừng lại khi chẳng có ai
            Biết em vẫn đang tồn tại
             
            Em ơi đừng làm lệ vương khoé mi
            Đừng làm thân xác úa si
            Tình tàn xin cất bước đi
            Chớ lưu luyến thêm làm gì?
            Cố yêu được chi
             
            Rap:
             
            Chơi đùa, chơi đùa thôi à
            Xin đừng trêu đùa tôi mà
            Đừng giam lòng tin vào nơi vực sâu
            Dựng xây niềm đau thành ngôi nhà
            Luôn là luôn là tôi
            Đau lòng nhưng mà thôi
            Thiên hà rơi tả tơi
            Tim là nơi lả lơi
            Họ lại xem tôi như con cờ
             
            Đạp đổ tương lai tôi mong chờ
            Sai vì tôi mộng mơ
            Vì tình yêu nơi tôi tôn thờ?
            Tình tàn tình vỡ tan
            Trở về với khuôn mặt đáng thương
            Nhìn hành trình dở dang
            Chê bai hay những lời tán dương.
             
            Lệ mang sầu đau trên từng vết son
            Người thương em xưa giờ đây chẳng còn
            Đào sương hoa mơ em còn bỡ ngỡ
            Thời gian thoi đưa tim em tan vỡ
            Thương khi em yêu có đâu ngờ
            Trăng soi thân em cứ xác xơ
            Ở đâu người em nhớ.
             
            Em ơi dừng lại khi nắng đã phai
            Dừng lại khi em bước sai
            Dừng lại khi chẳng có ai
            Biết em vẫn đang tồn tại
             
            Em ơi đừng làm lệ vương khoé mi
            Đừng làm thân xác úa si
            Tình tàn xin cất bước đi
            Chớ lưu luyến thêm làm gì?
            Cố yêu được chi
             
            Rap:
             
            Một khi đã hết giá trị lợi dụng
            Họ trói con tiên em vào xiềng gông
            Em chỉ muốn đến góp vui cho đời
            Họ nghĩ là em đang chờ tiền công
             
            Em đã từng ở thời hoàng kim
            Từng sải cánh bay cùng đàn chim
            Giờ nhìn lại thì em có gì?
            Không một ai biết, không người hàn huyên
            Em trượt dài theo con dốc
            Em đã từng là một nàng tiên
             
            Kể và cười y như con ngốc
            Anh nghe rồi khóc như một thằng điên
            Em trượt dài theo con dốc
            Em đã từng là một nàng tiên
            Kể và cười y như con ngốc
            Anh nghe rồi khóc như một thằng điên.
             
            Em không buồn, em không khóc
            Cũng chẳng thấy đau…
            Như cái cách mà loài người
            Vẫn thường cứu lấy nhau
             
            Em không buồn, em không khóc
            Cũng chẳng thấy đau…
            Như cái cách mà loài người
            Vẫn thường cứu lấy nhau.
             
            Thanks! ❤	facebook	twitter
            thanked 1 time
            Submitted by hovanhuy1301hovanhuy1301 on 2023-10-22
             
            Add new translation
            Request a translation
            Comments
            Login
            or
            register
            to post comments
            https://lyricstranslate.com`
        },
        {
            name: 'GƯƠNG MẶT LẠ LẪM ',
            singer: 'Bố Đợ ft Các Cháu',
            path: './music/motbuocyeuvandamdau.mp3',
            image: './img/nhacchaybo.jpg',
            time: 299,
            lyrics: `(Hôm nay)
            (Dành hết lầm lỗi để chia tay)
            (Tình ta từ nay vỡ đôi)
            (Một dòng nước mắt lăn chạm qua môi)
            Một thế giới hư ảo, nhưng thật ấm áp
            Em xuất hiện khiến những băng giá đời anh bỗng dần tan đi
            Cuộc đời anh đặt tên là muộn phiền nên làm sao dám mơ mình may mắn
            Được trọn vẹn cùng em
            Ta phải xa em mặc kệ nước mắt em rơi
            Vì những nguyên do cả đời không dám đối diện
            Chỉ còn vài gang tấc nhưng lại xa xôi
            Tình mình tựa đôi đũa lệch, đành buông trôi
            Cầu mong em sẽ sớm quên được tất cả
            Tìm thấy một người, xứng đáng ở bên
            Từ nay duyên kiếp bỏ lại phía sau
            Ngày và bóng tối chẳng còn khác nhau
            Chẳng có nơi nào yên bình được như em bên anh
            Hạt mưa bỗng hoá thành màu nỗi đau
            Trời như muốn khóc ngày mình mất nhau
            Có bao nhiêu đôi ngôn tình
            Cớ sao lìa xa mình ta?
            Là nhân duyên trời ban
            Cớ sao mình chẳng thể thành đôi?
            Tại sao quá ngu ngốc
            Bỏ lại mảnh ghép mà đối với nhau là tất cả
            Còn mình thì vụn vỡ
            Thế giới thực tại ồn ào vẫn thấy cô đơn
            Còn hai ta thì khác, chỉ nhìn thôi tim đã thấu
            Từ nay duyên kiếp bỏ lại phía sau
            Ngày và bóng tối chẳng còn khác nhau
            Chẳng có nơi nào yên bình được như em bên anh
            Hạt mưa bỗng hóa thành màu nỗi đau
            Trời như muốn khóc ngày mình mất nhau
            Có bao nhiêu đôi ngôn tình
            Cớ sao lìa xa mình ta?
            Từ nay danh giới của hai chúng ta
            Là yêu nhưng không thể nào bước qua
            Ngọn cỏ ven đường thôi mà
            Làm sao với được mây?
            Từ sau câu giã từ êm ái kia
            Chẳng cơn bão lớn nào bằng bão lòng
            Gặp trong mơ mà cũng không dám gào lên
            "Anh thương em"`
        }
        ,{
            name:'BẠN ĐỜI',
            singer: 'Parze Ocean Band',
            path: './music/bandoi.mp3',
            image: './img/fo2.png',
            time: 247,
            lyrics: `Kiếp trước có lẽ 2 ta yêu nhau mà chẳng thể thành vợ chồng
            Nghĩ thoáng nên mai ra sao tụi mình cũng đều hài lòng
            Có thể hôm nay thương, có thể tương lai buông
            Có thể ta không giàu, miễn ở bên nhau vui không buồn
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già
            Ai rồi sẽ phải trước sau theo 1 người cùng về nhà
            Bước tiếp hay quên đi, nghĩ lắm chi thêm suy
            Ta cứ như bây giờ lo âu xa xôi để làm gì
            
            Ta yêu là yêu vậy thôi…không có khái niệm đúng và sai
            Mấy đứa hay nói lời khó nghe…bên nhau ta bỏ ngoài tai
            We rolling overnight…không ai phải nghi ngờ ai
            Không quan tâm bao nhiêu lần sai, chỉ cần em còn thương là anh vẫn ở lại.
            Đừng nói đến những thứ vốn quá lớn lao
            Đâu ai chắc ngày mai 2 ta sẽ chẳng thể bỏ nhau
            Giữ tim không hoài nghi bình yên trong ta sẽ đủ lâu
            Cứ vô tư biết đâu ngày sau lại vui như tình đầu
            
            Gặp gỡ trong tâm thế người dưng, chọn ở bên nhau vì bình yên
            Quá khứ, hiện tại là tình nguyện…tiếc là trên đời không gì là vĩnh viễn
            Vì lời hứa không thắng nổi thời gian, trừ sự cố gắng cả 2 thì có thể
            Nhưng nếu phải đặt 2 từ “trách nhiệm” xuống, liệu lòng chung thuỷ có bị làm khó dễ?
            Bởi chúng ta cũng chỉ là người thường, may mắn gặp và trở thành người thương
            Nên anh chẳng mong gì xa xôi ngoài sự tử tế nếu lỡ 1 người buông
            Dù ở lại hay là lỡ thương ai, đừng dành nửa kia lòng thương hại
            Cả khi điều vẫn nghĩ là “suốt đời” hồi đáp lại rằng không có tương lai
            Khi 1 mai tụi mình nhạt nhoà, ngọt ngào theo sau chẳng được như bấy lâu
            Khó đến mấy cứ nói 1 lời thật lòng rồi buông dù chỉ là mấy câu
            Đừng lo cho anh sẽ thấy đau
            Cười nên dù không thể lấy nhau
            Cả 2 có rơi xuống đáy sâu, tương lai chẳng thấy đâu
            Vẫn vui như ngày đầu
            Hãy thắp sáng hết những ngày còn lại
            Nếu như thời gian bên nhau không còn dài
            Nếu đến ngày phải buông tay, chỉ xin đừng quên hôm nay
            Đã từng biết nhau trên cõi đời này…
            
            Kiếp trước có lẽ 2 ta yêu nhau mà chẳng thể thành vợ chồng
            Nghĩ thoáng nên mai ra sao tụi mình cũng đều hài lòng
            Có thể hôm nay thương, có thể tương lai buông
            Có thể ta không giàu, miễn ở bên nhau vui không buồn
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già
            Ai rồi sẽ phải trước sau theo 1 người cùng về nhà
            Bước tiếp hay quên đi, nghĩ lắm chi thêm suy
            Ta cứ như bây giờ lo âu xa xôi để làm gì
            
            Mỗi lần anh nghĩ về 2 từ bạn đời lại nở 1 nụ cười bất giác
            Bởi vì anh thấy 2 từ này khó hiểu hơn cả mấy chuyện đất cát
            Anh đã từng muốn được là rapper và trở thành 1 người rất khác
            Nhưng anh chưa từng nghĩ là một ngày anh sẽ sợ phải mất em nhiều hơn mất rap
            Bởi vì mẹ nói…yêu có thể dễ, nhưng mà đâu dễ để con kiếm được bạn đời
            Chung sống bên nhau, sinh con, đẻ cái, trăm năm thì đâu có thể là chuyện tạm thời
            Anh bắt đầu lo, khi em bước tới và làm anh muốn rước về làm dâu cả đời
            Nhưng mà anh đúng hay anh sai trong chuyện đó thì chị “Tiên” bảo là thời gian mới biết câu trả lời
            Nên em ơi em…em luôn rất yên bình, thật là xinh và thích thêu thùa
            Không như tôi…luôn thô ráp bên ngoài và gặp ai cũng muốn trêu đùa
            Vậy là sao! 1 người gầy và 1 người cao…
            1 người quen buông lời cay đắng lại va vào ngay 1 người ngọt ngào
            Thế giới có thể đánh giá 2 đứa rất khác nhau, nhưng như vậy không đúng
            Bởi vì tôi chỉ muốn thấy em, sau khi gặp công chúng
            Có những lúc tôi như muốn phát điên, em không hề than phiền
            Nắm lấy cánh tay tôi đang run lên và trao tôi nụ cười ngoan hiền…
            That’s why I love this girl…can you see?
            That’s why I love this girl…can you see?
            Baby you love your man…I can see!
            That we are meant to be…meant to be
            
            Chớp mắt 20-30 chiều nao rồi tụi mình cũng về già
            Ai rồi sẽ phải trước sau theo 1 người cùng về nhà`
        }
        ,{
            name: 'GẤP ĐÔI YÊU THƯƠNG',
            singer: 'Hoàng KCIM ft Hồ Ngọc Thảo',
            path: './music/gapdoiyeuthuong.mp3',
            image: './img/gapdoi.jpg',
            time: 302,
            lyrics: `Nói anh nghe đi, thế giới này
            đã làm em tổn thương nhiều như thế nào
            nói anh nghe đi, có những ngày
            nước mắt em rơi tay em tự lau lấy
            
            Nếu cuộc đời này, chỉ toàn là dối trá
            anh mặc kệ tất cả mọi thứ ngoại trừ em
            nếu chặng đường dài này, mình vấp ngã
            điều tuyệt nhất là ta sẽ đứng dậy cùng nhau
            
            Thế Giới này làm tổn thương em bao nhiêu
            anh sẽ yêu em nhiều gấp đôi như vậy
            Đã bao giờ em thấy đây là định mệnh
            Mình gặp nhau khi cả hai đang còn chênh vênh
            
            Thế Giới này đã làm đau em bao nhiêu
            Anh sẽ thương em nhiều gấp đôi như vậy
            Tháng năm sau này, cuộc đời mình còn nhiều sóng gió
            Xin em hãy đi cùng anh, đến tận cùng của giấc mơ`
        }
        ,{
            name:'KHÓC CÙNG EM',
            singer:'Mr Hoàng ft Huynh MTP',
            path: './music/khoccungem.mp3',
            image:'./img/khoccungemm.jpg',
            time: 251,
            lyrics:`Cuộc gọi đến
            Và như mọi khi là lặng nghe em khóc
            I try so very hard to listen your story
            But you don't know it hurts me so bad
            Cầu trời chóng ấm đêm đông buốt giá kia sẽ bớt lạnh
            Đôi tay giấu ác mộng doạ dẫm hi vọng càng mong manh
            Vùi chôn tổn thương
            Tội con tim này đơn phương
            Chờ đợi một người dù biết chẳng có cơ hội
            Điều gì nhẫn tâm hơn sự im lặng?
            Muộn phiền người trút nên đôi vai này
            Rồi ngày mai còn cần anh không?
            Một vòng tròn tối tăm không ra lối, đó là những gì mà anh
            Phải kìm nén tất cả đau đớn, tủi thân để bên em
            Làm gì để ngần ấy vết dao khép lại
            Để giấu đi bao nỗi đau trĩu nặng?
            Sợ ngày nào nếu tim vỡ trăm mảnh
            Chỉ còn lại vài nhịp mong manh
            Chuyện tình về trái tim sắp gục ngã, bên hai trái tim hạnh phúc
            Hoạ thành bức tranh về tình yêu, trong đó mờ tên anh
            I don't know why...
            I need you so bad
            Em luôn xa con tim này
            Vì em không yêu sao có thể hiểu mình như đường thẳng song song vậy?
            Vì chưa từng có làm sao thiếu, phải lặng lẽ ở bên
            Tàn sức thương một người không lối thoát
            Chờ đợi một người dù biết chẳng có cơ hội
            Điều gì nhẫn tâm hơn sự im lặng?
            Muộn phiền người trút nên đôi vai này
            Rồi ngày mai còn cần anh không?
            Một vòng tròn tối tăm không ra lối, đó là những gì mà anh
            Phải kìm nén tất cả đau đớn, tủi thân để bên em
            Làm gì để ngần ấy vết dao khép lại
            Để giấu đi bao nỗi đau trĩu nặng?
            Sợ ngày nào nếu tim vỡ trăm mảnh
            Chỉ còn lại vài nhịp mong manh
            Chuyện tình về trái tim sắp gục ngã bên hai trái tim hạnh phúc
            Hoạ thành bức tranh về tình yêu, trong đó mờ tên anh
            Mùa đông và nỗi nhớ tựa như tri kỉ (nghìn năm không rời)
            Lạnh môi tay khẽ run từng đêm một mình vì nhớ bóng hình
            Giờ em nghĩ đến ai mà môi không ngừng cười?
            Please don't do it anymore
            Chờ đợi một người dù biết chẳng có cơ hội
            Điều gì nhẫn tâm hơn sự im lặng?
            Muộn phiền người trút nên đôi vai này
            Rồi ngày mai còn cần anh không?
            Một vòng tròn tối tăm không ra lối, đó là những gì mà anh
            Phải kìm nén tất cả đau đớn, tủi thân để bên em
            Làm gì để ngần ấy vết dao khép lại
            Để giấu đi bao nỗi đau trĩu nặng?
            Sợ ngày nào nếu tim vỡ trăm mảnh
            Chỉ còn lại vài nhịp mong manh
            Chuyện tình về trái tim sắp gục ngã bên hai trái tim hạnh phúc
            Hoạ thành bức tranh về tình yêu, trong đó mờ tên anh
            Cuộc gọi đến
            Và như mọi khi là lặng nghe em khóc (lặng nghe em khóc)
            I try so very hard to listen your story
            But you don't know it hurts me so bad (me so bad)`
        }
        ,
        {
            name:'VIETMIX DEEPHOUSE',
            singer:'Hoàng MTP',
            path: './music/nhacngheditam.mp3',
            image: './img/nhacchayboo.jpg',
            time: 1408,
            lyrics:`bật max loa lên và nhảy nào`
        }
    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="img">
                        <img src="${song.image}" alt="">
                    </div>
                    <div class="musicInfomation">
                        <h3>${song.name}</h3>
                        <p>${song.singer}</p>
                    </div> 
                    <div class="playlistOption">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <p>${formatTime(song.time)}</p>
                    </div>
                </div>
            `
        })
        pageList.innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    }
    ,
    handleEvents: function() {
        _this = this
        
        

        //Xử lí nút dowload
        dowloadBtn.onclick = function() {
            dowloadBtn.href = `${_this.currentSong.path}`;
        }

        //Xử lí khi click vào nút button
        lyricsBtn.onclick = function() {
            pageLyrics.style.display = 'block'
            pageHome.style.display = 'none'
            pageList.style.display = 'none'
            homeBtn.style.display = 'block'
            listBtn.style.display = 'none'
            lyricsHeading.textContent = "LYRICS"
            lyricsHeading.style.display = "inline-block"
        }
        
        //Xử lý nút option chọn dowload or lyrics 
        optionHeading.onclick = function() {
            optionMenu.style.display = 'block'
        }

        //lắng nghe hành vi khi click vào trang home
        document.addEventListener('click', function(e) {
            if(e.target != optionMenu && e.target != optionHeading) {
                optionMenu.style.display = 'none'
            }
        })
         
        //Xư lý nút list ở trang home
        listBtn.onclick = function() {
            pageHome.style.display = 'none'
            pageList.style.display = 'block'
            homeBtn.style.display = 'block'
            listBtn.style.display = 'none'
            playListName.style.display = 'block'
            pageLyrics.style.display = 'none'
            lyricsHeading.textContent = "MY MUSIC"
        }

        //Xử lý nút back ở trang music 
        homeBtn.onclick = function() {
            pageHome.style.display = 'block'
            pageList.style.display = 'none'
            homeBtn.style.display = 'none'
            listBtn.style.display = 'block'
            playListName.style.display = 'none'
            pageLyrics.style.display = 'none'
            
        }

        //Xử lý nút play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        play2Btn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        //Xử lí nút lùi 5 giây prevTime
        prevTime.onclick = function() {
            audio.currentTime -= 5
        }

        //Xử lí nút tới 5 giây next
        nextTime.onclick = function() {
            audio.currentTime += 5
        }

        //Xử lí nút next bài hát
        nextMusic.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()

        }

        //Xử lí nút next bài hát
        prevMusic.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()

        }

        


        //Xử lí random bài hát
        randomBtn.onclick = function() {
            _this.isRandom =!_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
            console.log(_this.isRandom, randomBtn)
        }

        

        //Xử lí nút repeat bài hát
        repeatBtn.onclick = function() {
            _this.isRepeat =!_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //Xử lí next song khi bài hát kết thúc
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextMusic.click()
            }
        }
        

        //Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            playPause.classList.add('playing')
            songLive.classList.add('playing')
        }

        //Khi song được pause
        audio.onpause = function() {
            _this.isPlaying = false
            playPause.classList.remove('playing')
            songLive.classList.remove('playing')
        }

        //Khi tiến độ bài hát được thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                progress.value = progressPercent
                headingMusicTimeStart.textContent = formatTime(Math.floor(audio.currentTime))
            }
        }

        //Khi tua song
        progress.oninput = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        
        //lắng nghe hành vi khi click vào playlist
        playlist.onclick  = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            songLive.style.display = 'flex'
            if(e.target.closest('.song:not(.active)')) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                audio.play()
                _this.render()
                console.log(e.target)
                
            }  
            console.log($('.playlistOption p'))
            
        }



        //Xử lí nút close tắt tab bên live song
        closeBtn.onclick = function() {
            songLive.style.display = 'none'
        }

        
        //Volumn
       

        volumnOn.onclick = function() {
            _this.isVolumn =!_this.isVolumn
            volumnBtn.classList.add('active')
            volumn.value = 0

        }

        offVolumn.onclick = function() {
            _this.isVolumn =!_this.isVolumn
            volumnBtn.classList.remove('active')
        }

        volumn.addEventListener('input', function()
        {
            audio.volume = volumn.valueAsNumber;
            if(audio.volume === 0) {
                volumnBtn.classList.add('active')
            }
            else {
                volumnBtn.classList.remove('active')
            }
            

        })


        //Volumn on of
        


        
    },
    loadCurrentSong: function () {
        headingMusicName.textContent = this.currentSong.name
        headingMusicSinger.textContent = this.currentSong.singer
   
            headingMusicTime.innerHTML = formatTime(this.currentSong.time)
       
        headingCdThumb.src = `${this.currentSong.image}`
        audio.src = this.currentSong.path
        
        songLiveName.textContent = this.currentSong.name
        songLiveSinger.textContent = this.currentSong.singer

        lyricName.textContent = this.currentSong.name    
        lyricsSinger.textContent = this.currentSong.singer
        lyrics.textContent = this.currentSong.lyrics

        dowloadBtn.dataset.custom = `dowload="${this.currentSong.path}"`
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
     },
    randomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    loadDataAudio: function() {
        
    },
    start: function() {
        this.defineProperties();
        this.loadCurrentSong();
        this.handleEvents();
        this.render();
        
    }
}

app.start()