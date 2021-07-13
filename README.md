# React
  - Context API : 
    + createContext :
    + useContext :
    + useReducer :
      Ví dụ : auditProvider 
      
        import React from "react";
        import PropTypes from "prop-types";
        import useGeneral from "../../hooks/general/useGeneral";
        export const AuditContext = React.createContext();
        export const useAudit = () => {
          const audit = React.useContext(AuditContext);
          if (!audit) {
            throw new Error(`Error`);
          }
          return audit;
        };
        export const AuditProvider = ({ children }) => {
          const { mapArrayToObj } = useGeneral()
          const [languageId, setLanguageId] = React.useState();
          const [shop, setShop] = React.useState();
          const [period, setPeriod] = React.useState();
          const [futurePeriod, setFuturePeriod] = React.useState();
          const [pgList, setPgList] = React.useState();
          const [info, setInfo] = React.useState();
          const [country, setCountry] = React.useState();
          const [shopGroup, setShopGroup] = React.useState();
          const [auditFacts, setAuditFacts] = React.useState([]);
          const [detailSummary, setDetailSummary] = React.useState([]);
          const setPgArray = (pgArray) => {
            setPgList(mapArrayToObj(pgArray, "productGroupId"));
          }
          const wrapped = {
            languageId, shop, period, pgList, info, country, shopGroup, auditFacts, detailSummary, futurePeriod,
            setPgArray, setLanguageId, setShop, setPeriod, setInfo, setCountry, setShopGroup,
            setAuditFacts, setDetailSummary, setFuturePeriod
          };
          return (
            <AuditContext.Provider value={wrapped}>
              {children}
            </AuditContext.Provider>
          );
        };
        AuditProvider.propTypes = {
          children: PropTypes.node,
        };

# Client 
  - react-bootraps : https://react-bootstrap.github.io/
  - react-final-form : https://final-form.org/docs/react-final-form/getting-started
  - blue-print-js : https://blueprintjs.com/docs/
    -> Toast : từ blue-printjs
  - Lodash : https://lodash.com/ 
# Server 
  - GraphQL : Là ngôn ngữ truy vấn dành cho API, thay vì sử dụng REST API với endpoint nhiều chỗ thì giờ chỉ cần một chỗ
  - Apolo Server : sử dụng cùng với react để lấy data từ GraphQL server 
  - Test query GraphQL : https://studio.apollographql.com/sandbox/explorer?_gl=1*at3ise*_ga*NjMyOTMyMzQxLjE2MjI2MjE0OTg.*_ga_0BGG5V2W2K*MTYyNjE1OTM3Ni4xNS4xLjE2MjYxNTkzODUuMA..

# Các bước phát triển blog 
  # Admin - Client
    - Phân tích chức năng hệ thống 
    - Tạo server sử dụng GraphQL và Apolo Server để lấy dữ liệu (Nghiên cứu mongooDB)
    - Tạo giao diện
