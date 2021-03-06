import React from "react";
import { Row, Col, Input } from "reactstrap";
const AdInfo = ({ fileRegist, id }) => (
  <div className="AdminWrap">
    <Row>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" />
        <Input
          type="textarea"
          className="infoText"
          placeholder="내용을 입력해주세요."
        />

        <input type="file" onChange={fileRegist} id={id} />
      </Col>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" />
        <Input
          type="textarea"
          className="infoText"
          placeholder="내용을 입력해주세요."
        />
        <input type="file" onChange={fileRegist} id={id} />
      </Col>
      <Col sm="4" className="infoWrap">
        <Input placeholder="제목" />
        <Input
          type="textarea"
          className="infoText"
          placeholder="내용을 입력해주세요."
        />
        <input type="file" onChange={fileRegist} id={id} />
      </Col>
    </Row>
  </div>
);
export default AdInfo;
