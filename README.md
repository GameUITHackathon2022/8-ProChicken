# 8-ProChicken
## Giới thiệu PCV (Pro Chicken Volunteer):
PCV là một nền tảng cho phép kết nối người tình nguyện với người tổ chức hoạt động tình nguyện. Các hoạt động tình nguyện sẽ được hệ thống hóa giúp cho tình nguyện viên có thể dễ dàng xem những hoạt động mình có thể tham gia cũng như nhà tình nguyện có thể dễ dàng tạo ra các hoạt động tình nguyện của mình. Ứng với mỗi hoạt động bạn được xác nhận tham gia thì bạn sẽ nhận được một lượng GreenPoint tương ứng. GreenPoint là điểm dùng để đánh giá mức độ tích cực trong quá trình tham gia công tác xã hội cuả mình. Càng nhiều điểm GreenPoint có nghĩa là bạn càng tích cực trong các hoạt động công tác xã hội. Ứng với mỗi hoạt động sẽ có một lượng điểm GreenPoint khác nhau để đánh giá mức độ ảnh hưởng của hoạt động đó đến môi trường. Ngoài ra nếu bạn là sinh viên có thể điền vào thông tin trường và mã số sinh viên. Nhờ đó các trường đại học có thể dựa vào danh sách các mã số sinh viên để xem xét cộng điểm rèn luyện hay xét sinh viên 5 tốt.
## Các tính năng chính:
- Sign in và Sign up
- Xem danh sách các hoạt động tình nguyện có thể đăng kí tham gia
- Tham gia một hoạt động tình nguyện
- Tạo một hoạt động tình nguyện
- Xem danh sách các hoạt động tình nguyện đã đăng kí tham gia
- Xem danh sách các hoạt động tình nguyện đã tạo
- Nếu là người tạo hoạt động có thể xem danh sách những người tham gia và xác nhận tham gia để tích điểm GreenPoint
## Hướng dẫn chạy project:
- Đầu tiên mở một sever tạo 1 database pcv sau đó import file pcv.sql để lấy thông tin cho database
- Run cmd ở folder chứa file pcv.jar và nhập dòng lệnh sau: java -jar pcv.jar để chạy file backend (yêu cầu máy đã tải Java JRE, JDK và Apache Maven sau đó cài đặt biến môi trường JAVA_HOME và MAVEN_HOME)
- Tại folder chứa project Run cmd và nhập dòng lệnh: npm install
- Sau đó nhập lệnh npm start và trải nghiệm ứng dụng
## Hướng dẫn sử dụng webapp PCV:
- Tạo một tài khoản để vào trang web
- Người dùng có thể vào xem thông tin các hoạt động tình nguyện đang diễn ra và tham gia các hoạt động đó
- Ngoài ra bạn có thể tạo ra các hoạt động tình nguyện và quản lí danh sách người tham gia trong mục "sự kiện đã tạo".
- Chức năng quản lí người tình nguyện tham gia hoạt động của mình và xác nhận người tình nguyện đó để nhận GreenPoint.
- Chỉ khi người tổ chức hoạt động xác nhận những người tình nguyện viên thì điểm GreenPoint mới được cộng cho người dùng và lúc đó mới được tính là tham gia hoạt động
