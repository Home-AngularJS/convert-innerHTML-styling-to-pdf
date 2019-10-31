
export function getTemplate() {
  const dest = {
    'html': '<div>\n' +
      '      <h1>Hello 1</h1>\n' +
      '      <h2>Hello 2</h2>\n' +
      '      <p class="class1">Hello 3</p>\n' +
      '    </div>\n' +
      '    <hr>',
    'css': ':host ::ng-deep h1{ color: red; }' +
      ':host ::ng-deep h2{ color: blue; }' +
      ':host ::ng-deep .class1{ color: yellow; }'
  };
  return dest;
}

export function getTeceiptTemplates() {
  const dest = [
    {
      'id': 2,
      'templateName': 'Украинская версия',
      'templateStyle': ':host ::ng-deep body {\n' +
        '  font-size: 95%;\n' +
        '}\n' +
        ':host ::ng-deep code {\n' +
        '  font-size: 100%;\n' +
        '  color: #000000;\n' +
        '}\n' +
        ':host ::ng-deep *{\n' +
        '  margin: 0;\n' +
        '  box-sizing: border-box;\n' +
        '}\n' +
        ':host ::ng-deep li {\n' +
        '  list-style: none;\n' +
        '}\n' +
        ':host ::ng-deep a {\n' +
        '  text-decoration: none;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block{\n' +
        '  display: flex;\n' +
        '  font-family: \'Roboto\', sans-serif;\n' +
        '  text-align: center;\n' +
        '  text-transform: uppercase;\n' +
        '  height: 70vh;\n' +
        '  position: relative;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div{\n' +
        '  margin: auto;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div>p{\n' +
        '  display: flex;\n' +
        '  justify-content: space-between;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div>span{\n' +
        '  display: block\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--borderBig{\n' +
        '  margin-bottom: 20px;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--borderSmall{\n' +
        '  margin-bottom: 10px;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--bold{\n' +
        '  font-weight: bold;\n' +
        '  font-size: 1.2rem;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--result{\n' +
        '  background-color: #000000;\n' +
        '  color: #fff;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--footerCenter {\n' +
        '  font-size: 12px;\n' +
        '  text-transform: none;\n' +
        '}',
      'templateBody': '<div class="bill-block">\n' +
        '  <div>\n' +
        '    <span>__NAME_BANK__</span>\n' +
        '    <span>__M_NAME__</span>\n' +
        '    <span class="bill-block__text--borderBig">__M_LOCATION__</span>\n' +
        '    <p>\n' +
        '      <span>Касир:</span>\n' +
        '      <span><table width="200"><tr><td></td></tr></table></span>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>id термінала:</span>\n' +
        '      <code>__TERM_ID__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>id точки:</span>\n' +
        '      <code>__MERCH_ID__</code>\n' +
        '    </p>\n' +
        '    <code class="bill-block__text--bold">ЧЕК: __REC_NUM__</code>\n' +
        '    <span class="bill-block__text--bold">__TYPE_OPERATION_TEXT__</span>\n' +
        '    <p class="bill-block__text--borderSmall">\n' +
        '      <span>сума:</span>\n' +
        '      <code class="bill-block__text--bold">__AMOUNT__ UAH</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>__IPS__</span>\n' +
        '      <span>__TYPE_OPERATION_CODE__</span>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <code>__PAN_MASKA__</code>\n' +
        '      <span>__EXP_DATE__</span>\n' +
        '    </p>\n' +
        '\n' +
        '    <span class="bill-block__text--result bill-block__text--bold">__RESP_TEXT__</span>\n' +
        '\n' +
        '    <p>\n' +
        '      <span>код відповіді</span>\n' +
        '      <code>__RESP_CODE__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>код авторизації</span>\n' +
        '      <code>__AUTH_CODE__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>номер посилання</span>\n' +
        '      <code>__RRN__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>порядковий номер</span>\n' +
        '      <code>__SEG_NUM__</code>\n' +
        '    </p>\n' +
        '    <p class="bill-block__text--borderBig">\n' +
        '      <code>дата __TRANSACTION_DATE__</code>\n' +
        '      <code>Час __TRANSACTION_TIME__</code>\n' +
        '    </p>\n' +
        '    <span class="bill-block__text--bold">Дякуємо</span>\n' +
        '    <br><span class="bill-block__text--footerCenter">Transenix</span>\n' +
        '  </div>\n' +
        '</div>',
      'nameBank': {'key': '__NAME_BANK__', 'value': 'АЛЬФА'},
      'mName': {'key': '__M_NAME__', 'value': 'ТОВ "СОНЕЧКО"'},
      'mLocation': {'key': '__M_LOCATION__', 'value': 'м. Києв, вул. Гарматна, 51 А'},
      'termId': {'key': '__TERM_ID__', 'value': 'cb22bb63'},
      'merchId': {'key': '__MERCH_ID__', 'value': 'acace7e2c7ab'},
      'recNum': {'key': '__REC_NUM__', 'value': '000964'},
      'typeOperation': {'key': '__TYPE_OPERATION_CODE__', 'value': '26'},
      'typeOperationPayTxt': {'key': '__TYPE_OPERATION_TEXT__', 'value': 'оплата'},
      'typeOperationRefundTxt': {'key': '__TYPE_OPERATION_TEXT__', 'value': 'повернення'},
      'amount': {'key': '__AMOUNT__', 'value': 99.99},
      'ips': {'key': '__IPS__', 'value': 'MasterCard'},
      'panMaska': {'key': '__PAN_MASKA__', 'value': '1234************3456'},
      'expDate': {'key': '__EXP_DATE__', 'value': '19/08'},
      'resp': {'key': '__RESP_CODE__', 'value': '00'},
      'respSuccessTxt': {'key': '__RESP_TEXT__', 'value': 'успішно'},
      'respFailureTxt': {'key': '__RESP_TEXT__', 'value': 'неуспішно'},
      'authCode': {'key': '__AUTH_CODE__', 'value': '123456'},
      'rrn': {'key': '__RRN__', 'value': '1857456215'},
      'seqNum': {'key': '__SEG_NUM__', 'value': 10000002},
      'transactionDate': {'key': null, 'value': '2019-08-02T09:56:31.828+0000'},
      'transactionDateForm': {'key': '__TRANSACTION_DATE__', 'value': 'dd/MM/yyyy'},
      'transactionTimeForm': {'key': '__TRANSACTION_TIME__', 'value': 'hh:mm:ss'}
    },
    {
      'id': 3,
      'templateName': 'Русская версия',
      'templateStyle': ':host ::ng-deep body {\n' +
        '  font-size: 95%;\n' +
        '}\n' +
        ':host ::ng-deep code {\n' +
        '  font-size: 100%;\n' +
        '  color: #000000;\n' +
        '}\n' +
        ':host ::ng-deep *{\n' +
        '  margin: 0;\n' +
        '  box-sizing: border-box;\n' +
        '}\n' +
        ':host ::ng-deep li {\n' +
        '  list-style: none;\n' +
        '}\n' +
        ':host ::ng-deep a {\n' +
        '  text-decoration: none;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block{\n' +
        '  display: flex;\n' +
        '  font-family: \'Roboto\', sans-serif;\n' +
        '  text-align: center;\n' +
        '  text-transform: uppercase;\n' +
        '  height: 70vh;\n' +
        '  position: relative;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div{\n' +
        '  margin: auto;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div>p{\n' +
        '  display: flex;\n' +
        '  justify-content: space-between;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block>div>span{\n' +
        '  display: block\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--borderBig{\n' +
        '  margin-bottom: 20px;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--borderSmall{\n' +
        '  margin-bottom: 10px;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--bold{\n' +
        '  font-weight: bold;\n' +
        '  font-size: 1.2rem;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--result{\n' +
        '  background-color: #000000;\n' +
        '  color: #fff;\n' +
        '}\n' +
        ':host ::ng-deep .bill-block__text--footerCenter {\n' +
        '  font-size: 12px;\n' +
        '  text-transform: none;\n' +
        '}',
      'templateBody': '<div class="bill-block">\n' +
        '  <div>\n' +
        '    <span>__NAME_BANK__</span>\n' +
        '    <span>__M_NAME__</span>\n' +
        '    <span class="bill-block__text--borderBig">__M_LOCATION__</span>\n' +
        '    <p>\n' +
        '      <span>Кассир:</span>\n' +
        '      <span><table width="200"><tr><td></td></tr></table></span>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>id терминала:</span>\n' +
        '      <code>__TERM_ID__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>id точки:</span>\n' +
        '      <code>__MERCH_ID__</code>\n' +
        '    </p>\n' +
        '    <code class="bill-block__text--bold">ЧЕК: __REC_NUM__</code>\n' +
        '    <span class="bill-block__text--bold">__TYPE_OPERATION_TEXT__</span>\n' +
        '    <p class="bill-block__text--borderSmall">\n' +
        '      <span>сумма:</span>\n' +
        '      <code class="bill-block__text--bold">__AMOUNT__ UAH</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>ips</span>\n' +
        '      <span>__TYPE_OPERATION_CODE__</span>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <code>__PAN_MASKA__</code>\n' +
        '      <span>__EXP_DATE__</span>\n' +
        '    </p>\n' +
        '\n' +
        '    <span class="bill-block__text--result bill-block__text--bold">__RESP_TEXT__</span>\n' +
        '\n' +
        '    <p>\n' +
        '      <span>код ответа</span>\n' +
        '      <code>__RESP_CODE__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>код авторизации</span>\n' +
        '      <code>__AUTH_CODE__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>номер отправки</span>\n' +
        '      <code>__RRN__</code>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <span>порядковий номер</span>\n' +
        '      <code>__SEG_NUM__</code>\n' +
        '    </p>\n' +
        '    <p class="bill-block__text--borderBig">\n' +
        '      <code>дата __TRANSACTION_DATE__</code>\n' +
        '      <code>Час __TRANSACTION_TIME__</code>\n' +
        '    </p>\n' +
        '    <span class="bill-block__text--bold">Спасибо</span>\n' +
        '    <br><span class="bill-block__text--footerCenter">Transenix</span>\n' +
        '  </div>\n' +
        '</div>',
      'nameBank': {'key': '__NAME_BANK__', 'value': 'АЛЬФА'},
      'mName': {'key': '__M_NAME__', 'value': 'ООО "СОНЕЧКО"'},
      'mLocation': {'key': '__M_LOCATION__', 'value': 'г. Киев, ул. Гарматная, 51 А'},
      'termId': {'key': '__TERM_ID__', 'value': 'cb22bb63'},
      'merchId': {'key': '__MERCH_ID__', 'value': 'acace7e2c7ab'},
      'recNum': {'key': '__REC_NUM__', 'value': '000964'},
      'typeOperation': {'key': '__TYPE_OPERATION_CODE__', 'value': '26'},
      'typeOperationPayTxt': {'key': '__TYPE_OPERATION_TEXT__', 'value': 'оплата'},
      'typeOperationRefundTxt': {'key': '__TYPE_OPERATION_TEXT__', 'value': 'возврат'},
      'amount': {'key': '__AMOUNT__', 'value': 99.99},
      'ips': {'key': '__IPS__', 'value': 'MasterCard'},
      'panMaska': {'key': '__PAN_MASKA__', 'value': '1234************3456'},
      'expDate': {'key': '__EXP_DATE__', 'value': '19/08'},
      'resp': {'key': '__RESP_CODE__', 'value': '00'},
      'respSuccessTxt': {'key': '__RESP_TEXT__', 'value': 'успешно'},
      'respFailureTxt': {'key': '__RESP_TEXT__', 'value': 'неуспешно'},
      'authCode': {'key': '__AUTH_CODE__', 'value': '123456'},
      'rrn': {'key': '__RRN__', 'value': '1857456215'},
      'seqNum': {'key': '__SEG_NUM__', 'value': 10000002},
      'transactionDate': {'key': null, 'value': '2019-08-02T09:56:31.828+0000'},
      'transactionDateForm': {'key': '__TRANSACTION_DATE__', 'value': 'dd/MM/yyyy'},
      'transactionTimeForm': {'key': '__TRANSACTION_TIME__', 'value': 'hh:mm:ss'}
    }
  ];
  return dest;
}
