# React 🔥
  - Context API : 
    + createContext : Nó trả về 1 đối tượng context để lộ ra Provider và Consumer component. 
    + useContext : Thay cho consumer của context, bên trong useContext set params là đối tượng createContext được tạo (Quan sát hình dưới)
        
      Ví dụ : auditProvider.js
      
      
       ![image](https://user-images.githubusercontent.com/52592983/125414454-3683f9be-bc44-485a-b7e7-0052836bd613.png)
       
       * Giải thích về hình trên thì khi sử dụng hàm CreateContext và gán vào biến AuditContext thì hiện tại, AuditContext được trả về 2 đối tượng (Provider, Consumer), ở đây tiếp tục tạo 2 component, component useAudit cho phép các "component child" có thể sử dụng các biến mà component AuditProvider đã cung cấp ở prop values. VÀ ĐIỀU ĐẶC BIỆT TỐI QUAN TRỌNG, ĐÓ LÀ TỚI CÁC COMPONENT CON, CÓ THỂ GỌI CÁC STATE ĐƯỢC LƯU TRONG CONTEXT VÀ CŨNG CÓ THỂ CHỈNH SỬA NÓ
       
  - ReactHook :
    + useReducer : Điều quan trong đó chính là nó tương tự useState nhưng nó sẽ được dùng để xử lý các state phức tạp, thay đổi theo nhiều cách. Vậy nó là gì ? 
        -> Đây là 1 hàm có 2 tham số truyền vào là state và action. Dựa vào action, sẽ có cách trả về, mỗi action state sẽ khác nhau.
        
        *CONFIG
        
        ![image](https://user-images.githubusercontent.com/52592983/125419757-6a549a12-e316-49a9-93c3-05da8fb8db28.png)
        
        *USE
        
        ![image](https://user-images.githubusercontent.com/52592983/125419990-3c2eb48b-aefa-465f-a52b-b4d1dfdc81a8.png)
       
       
      
# Client 
  - react-bootraps : https://react-bootstrap.github.io/
  - react-final-form : https://final-form.org/docs/react-final-form/getting-started
  - blue-print-js : https://blueprintjs.com/docs/
    -> Toast : từ blue-printjs
  - Lodash : https://lodash.com/ 
  - FormatJs : https://www.npmjs.com/package/react-intl 
# Server 
  - GraphQL : Là ngôn ngữ truy vấn dành cho API, thay vì sử dụng REST API với endpoint nhiều chỗ thì giờ chỉ cần một chỗ
  - Apolo Server : sử dụng cùng với react để lấy data từ GraphQL server 
  - Laravel API GraphQL : https://lighthouse-php.com/
  - Test query GraphQL : https://studio.apollographql.com/sandbox/explorer?_gl=1*at3ise*_ga*NjMyOTMyMzQxLjE2MjI2MjE0OTg.*_ga_0BGG5V2W2K*MTYyNjE1OTM3Ni4xNS4xLjE2MjYxNTkzODUuMA..
# Blog Hay :
  - **Lộ trình học Reactjs (Hậu Nguyễn)** : https://gist.github.com/paulnguyen-mn/e8a80c07ab9c090c19bce3c89d7cc50f 
  - Youtube Hậu Nguyễn : https://www.youtube.com/c/EasyFrontend
  - Lộ trình hook của Hậu Nguyễn : https://www.youtube.com/playlist?list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m
# Các bước phát triển blog 
  # Admin - Client
    - Phân tích chức năng hệ thống 
    - Tạo server sử dụng GraphQL và Apolo Server để lấy dữ liệu (Nghiên cứu mongooDB)
    - Tạo giao diện
