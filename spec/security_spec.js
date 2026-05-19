import XMLBuilder from "../src/fxb.js";

describe("XMLBuilder Security Tests", function () {
  it('should esxape double quote in attribute value', function () {
    const jObj = {
      a: {
        // "@_attr": '&apos; onClick=&apos;alert(1)'
        "@_attr": '" onClick="alert(1)'
      }

    };
    const expected = `<a attr="&quot; onClick=&quot;alert(1)"></a>`;
    const builder = new XMLBuilder({
      ignoreAttributes: false,
      processEntities: false
    });
    const result = builder.build(jObj);
    // console.log(result);
    expect(result).toEqual(expected);
  });

  it('should esxape double quote in attribute value', function () {
    const jObj = {
      a: {
        "@_attr": '\\" onClick=\\"alert(1)'
      }

    };
    const expected = `<a attr="\\&quot; onClick=\\&quot;alert(1)"></a>`;
    const builder = new XMLBuilder({
      ignoreAttributes: false,
      processEntities: false
    });
    const result = builder.build(jObj);
    // console.log(result);
    expect(result).toEqual(expected);
  });

  it('should esxape double quote in attribute value when order was preserrved', function () {
    const jObj = [
      {
        "a": [],
        ":@": {
          "@_attr": '" onClick="alert(1)'
        }
      }
    ]
    const expected = `<a attr="&quot; onClick=&quot;alert(1)"></a>`;
    const builder = new XMLBuilder({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      processEntities: false,
      preserveOrder: true
    });
    const result = builder.build(jObj);
    // console.log(result);
    expect(result).toEqual(expected);
  });
});
