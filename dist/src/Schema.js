"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldSettings_1 = require("./FieldSettings");
var Schemas;
(function (Schemas) {
    class Schema {
        constructor(options) {
            this.Icon = options.Icon;
            this.DisplayName = options.DisplayName;
            this.Description = options.Description;
            this.FieldSettings = options.FieldSettings;
            this.AllowIndexing = options.AllowIndexing;
            this.AllowIncrementalNaming = options.AllowIncrementalNaming;
            this.AllowedChildTypes = options.AllowedChildTypes;
        }
    }
    Schemas.Schema = Schema;
    function ContentTypeCTD() {
        let options = {
            DisplayName: '$Ctd-ContentType,DisplayName',
            Description: '$Ctd-ContentType,Description',
            Icon: 'ContentType',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Id',
            displayName: 'Id',
            description: 'A unique ID for the Content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'ParentId',
            displayName: 'Id',
            description: 'A unique ID for the Content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'VersionId',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Type',
            displayName: 'NodeType',
            description: 'The type of the Node in the Repository.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Name',
            displayName: 'Uri name',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'CreatedById',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'ModifiedById',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Version',
            displayName: 'Version',
            description: 'Latest version number.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Path',
            displayName: 'Path',
            description: 'Content type path.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Depth',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsSystemContent',
            displayName: 'System Content',
            description: 'This field is true if content is in a system folder/trash or the content is a system folder/file.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'HandlerName',
            displayName: 'Handler Name',
            description: 'Fully Qualified Name.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ParentTypeName',
            displayName: 'Parent Type Name',
            description: 'Name of the parent content type.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'DisplayName',
            displayName: 'Name',
            description: 'User friendly name of the content type.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Description',
            displayName: 'Description',
            description: 'Longer description of the content type.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Icon',
            displayName: 'Icon',
            description: 'Content type icon.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            isText: true,
            name: 'Binary',
            displayName: 'Binary',
            description: 'The content type definition in XML format.',
            readOnly: false,
            compulsory: false,
            defaultValue: '<?xml version="1.0" encoding="utf-8"?>\<ContentType name="MyType" parentType="GenericContent" handler="SenseNet.ContentRepository.GenericContent" xmlns="http://schemas.sensenet.com/SenseNet/ContentRepository/ContentTypeDefinition">\  <DisplayName>MyType</DisplayName>\  <Description></Description>\  <Icon>Content</Icon>\  <AllowIncrementalNaming>true</AllowIncrementalNaming>\  <AllowedChildTypes>ContentTypeName1,ContentTypeName2</AllowedChildTypes>\  <Fields>\    <Field name="ShortTextField" type="ShortText">\      <DisplayName>ShortTextField</DisplayName>\      <Description></Description>\      <Configuration>\        <MaxLength>100</MaxLength>\        <MinLength>0</MinLength>\        <Regex>[a-zA-Z0-9]*$</Regex>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="LongTextField" type="LongText">\      <DisplayName>LongTextField</DisplayName>\      <Description></Description>\      <Configuration>\        <MaxLength>100</MaxLength>\        <MinLength>0</MinLength>\        <TextType>LongText|RichText|AdvancedRichText</TextType>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="NumberField" type="Number">\      <DisplayName>NumberField</DisplayName>\      <Description></Description>\      <Configuration>\        <MinValue>0</MinValue>\        <MaxValue>100.5</MaxValue>\        <Digits>2</Digits>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="IntegerField" type="Integer">\      <DisplayName>IntegerField</DisplayName>\      <Description></Description>\      <Configuration>\        <MinValue>0</MinValue>\        <MaxValue>100</MaxValue>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="BooleanField" type="Boolean">\      <DisplayName>BooleanField</DisplayName>\      <Description></Description>\      <Configuration>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="ChoiceField" type="Choice">\      <DisplayName>ChoiceField</DisplayName>\      <Description></Description>\      <Configuration>\        <AllowMultiple>false</AllowMultiple>\        <AllowExtraValue>false</AllowExtraValue>\        <Options>\          <Option selected="true">1</Option>\          <Option>2</Option>\        </Options>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="DateTimeField" type="DateTime">\      <DisplayName>DateTimeField</DisplayName>\      <Description></Description>\      <Configuration>\        <DateTimeMode>DateAndTime</DateTimeMode>\        <Precision>Second</Precision>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="ReferenceField" type="Reference">\      <DisplayName>ReferenceField</DisplayName>\      <Description></Description>\      <Configuration>\        <AllowMultiple>true</AllowMultiple>\        <AllowedTypes>\          <Type>Type1</Type>\          <Type>Type2</Type>\        </AllowedTypes>\        <SelectionRoot>\          <Path>/Root/Path1</Path>\          <Path>/Root/Path2</Path>\        </SelectionRoot>\        <DefaultValue>/Root/Path1,/Root/Path2</DefaultValue>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\    <Field name="BinaryField" type="Binary">\      <DisplayName>BinaryField</DisplayName>\      <Description></Description>\      <Configuration>\        <IsText>true</IsText>\        <ReadOnly>false</ReadOnly>\        <Compulsory>false</Compulsory>\        <DefaultValue></DefaultValue>\        <VisibleBrowse>Show|Hide|Advanced</VisibleBrowse>\        <VisibleEdit>Show|Hide|Advanced</VisibleEdit>\        <VisibleNew>Show|Hide|Advanced</VisibleNew>\      </Configuration>\    </Field>\  </Fields>\</ContentType>',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'CreatedBy',
            displayName: 'Created by',
            description: 'Content creator.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'CreationDate',
            displayName: 'Creation date',
            description: 'Content creation date.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'ModifiedBy',
            displayName: 'Modified by',
            description: 'Content was last modified by the given user.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            name: 'ModificationDate',
            displayName: 'Modification date',
            description: 'Content was last modified on the given date.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableLifespan',
            displayName: 'Enable Lifespan handling',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ContentTypeCTD = ContentTypeCTD;
    function GenericContentCTD() {
        let options = {
            DisplayName: '$Ctd-GenericContent,DisplayName',
            Description: '$Ctd-GenericContent,Description',
            Icon: 'Content',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Id',
            displayName: 'Id',
            description: 'Unique Id for the content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'ParentId',
            displayName: 'Parent Id',
            description: 'Id of the parent content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'OwnerId',
            displayName: 'Owner Id',
            description: 'Id of the owner.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'Owner',
            displayName: 'Owner',
            description: 'Content owner.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'VersionId',
            displayName: 'Version Id',
            description: 'Database row Id of current version.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Type',
            displayName: 'Content Type Name',
            description: 'Content type of the node in the repository.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Icon',
            displayName: 'Icon',
            description: 'Icon',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Name',
            displayName: 'Name',
            description: 'Specify a name that will appear in the address bar of the browser.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:Name'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'CreatedById',
            displayName: 'Created By (Id)',
            description: 'Id of creator.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'ModifiedById',
            displayName: 'Last Modified By (Id)',
            description: 'Id of last modifier.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Version',
            displayName: 'Version',
            description: 'Version number.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Path',
            displayName: 'Path',
            description: 'Content path in the repository.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Depth',
            displayName: 'Tree Depth',
            description: 'Content level in the tree. Root level is 0.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsSystemContent',
            displayName: 'System Content',
            description: 'This field is true if content is in a system folder/trash or the content is a system folder/file.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsFolder',
            displayName: 'Folder',
            description: 'This field is true if content can contain other content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'DisplayName',
            displayName: 'Display Name',
            description: 'Content name. You can set any name you prefer without any restrictions.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:DisplayName'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Description',
            displayName: 'Description',
            description: 'Description of the content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Hidden',
            displayName: 'Hidden',
            description: 'If checked, content will not show up in navigation.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Index',
            displayName: 'Index',
            description: 'Content order in navigation. Numbers closer to 0 will appear first.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableLifespan',
            displayName: 'Enable Lifespan',
            description: 'Specify whether you want to define starting and end date for the validity of this content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ValidFrom',
            displayName: 'Valid From',
            description: 'This content will appear on the date you set if lifespan handling is enabled for this content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ValidTill',
            displayName: 'Valid Till',
            description: 'This content will disappear on the date you set if lifespan handling is enabled for this content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AllowedChildTypes',
            displayName: 'Allowed child types',
            description: 'You can get and set which content types are explicitly allowed to be created under this content. It is a local setting.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EffectiveAllowedChildTypes',
            displayName: 'Effective allowed child types',
            description: 'You can get which content types are effective allowed to be created under this content. If there is no local setting, the global setting takes effect.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
                { Value: '1', Text: 'None', Enabled: true, Selected: false },
                { Value: '2', Text: 'Major only', Enabled: true, Selected: false },
                { Value: '3', Text: 'Major and minor', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'VersioningMode',
            displayName: 'Versioning Mode For Current Content',
            description: 'It shows the versioning mode of the current content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
                { Value: '1', Text: 'None', Enabled: true, Selected: false },
                { Value: '2', Text: 'Major only', Enabled: true, Selected: false },
                { Value: '3', Text: 'Major and minor', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'InheritableVersioningMode',
            displayName: 'Version history',
            description: 'Specify whether the system should create a new version whenever you create or modify a content below this content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0,
            controlHint: 'sn:VersioningModeChoice'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'CreatedBy',
            displayName: 'Created by',
            description: 'Content creator.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'CreationDate',
            displayName: 'Creation date',
            description: 'Content creation date.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'ModifiedBy',
            displayName: 'Modified By',
            description: 'Content was last modified by this user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ModificationDate',
            displayName: 'Modification Date',
            description: 'Content was last modified on this date.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
                { Value: '1', Text: 'Off', Enabled: true, Selected: false },
                { Value: '2', Text: 'On', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'ApprovingMode',
            displayName: 'Content Approval For Current Content',
            description: 'It shows the approval mode of the current content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Inherited', Enabled: true, Selected: true },
                { Value: '1', Text: 'Off', Enabled: true, Selected: false },
                { Value: '2', Text: 'On', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'InheritableApprovingMode',
            displayName: 'Content approval',
            description: 'Specify whether new or changed content below the current one should remain in a draft state until they have been approved.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0,
            controlHint: 'sn:ApprovingModeChoice'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Locked',
            displayName: 'Locked',
            description: 'It shows whether the content is checked out or not.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'CheckedOutTo',
            displayName: 'Checked Out To',
            description: 'The user currently locking the content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'TrashDisabled',
            displayName: 'Disable Trash',
            description: 'You can disable trash for this content and its children. If set, you can not restore deleted content.',
            readOnly: false,
            compulsory: false,
            defaultValue: 'false',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Finalized', Enabled: true, Selected: false },
                { Value: '1', Text: 'Creating', Enabled: true, Selected: false },
                { Value: '2', Text: 'Modifying', Enabled: true, Selected: false },
                { Value: '3', Text: 'ModifyingLocked', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.ContentRepository.Storage.ContentSavingState',
            name: 'SavingState',
            displayName: 'Saving state',
            description: 'State of multi-step saving.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ExtensionData',
            displayName: 'Extension data',
            description: 'You can set extra data in this field which is useful when extending a content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'BrowseApplication',
            displayName: 'Reference To Browse Application',
            description: 'Set this, if you would like to override the default browse application.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Approvable',
            displayName: 'Approvable By Current User',
            description: 'This fileld is true if the content is in \'pending\' state and can be approved by the current user.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsTaggable',
            displayName: 'Enable Tagging',
            description: 'Specify whether you would like to enable tagging capability for this content.',
            readOnly: false,
            compulsory: false,
            defaultValue: 'false',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Tags',
            displayName: 'Tags',
            description: 'List of tags and creators of them separated by commas.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0,
            controlHint: 'sn:TagList'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsRateable',
            displayName: 'Enable Rating',
            description: 'Specify whether you would like to enable rating capability for this content.',
            readOnly: false,
            compulsory: false,
            defaultValue: 'false',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'RateStr',
            displayName: 'Raw value of rating',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'RateAvg',
            displayName: 'Average rate',
            description: 'Average rate of the content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'RateCount',
            displayName: 'Rate count',
            description: 'Count of rates.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.RatingFieldSetting({
            range: 5,
            split: 1,
            name: 'Rate',
            displayName: 'Rate',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Publishable',
            displayName: 'Publishable By Current User',
            description: 'This fileld is true if the content can be published by the current user.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            name: 'Versions',
            displayName: 'Versions',
            description: 'Content version history.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'CheckInComments',
            displayName: 'Checkin comments',
            description: 'Comments for a new version.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'RejectReason',
            displayName: 'Reject reason',
            description: 'The reason why the content was rejected.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Workspace'],
            name: 'Workspace',
            displayName: 'Workspace',
            description: 'The container workspace of the content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'BrowseUrl',
            displayName: 'Browse url',
            description: '',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.GenericContentCTD = GenericContentCTD;
    function ContentLinkCTD() {
        let options = {
            DisplayName: '$Ctd-ContentLink,DisplayName',
            Description: '$Ctd-ContentLink,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'Link',
            displayName: 'Linked content',
            description: 'Set this reference to the Content to link.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ContentLinkCTD = ContentLinkCTD;
    function FileCTD() {
        let options = {
            DisplayName: '$Ctd-File,DisplayName',
            Description: '$Ctd-File,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            name: 'Binary',
            displayName: 'Binary',
            description: 'The binary content of the document.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'Size',
            displayName: 'Size',
            description: 'Size of the binary document.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'FullSize',
            displayName: 'Full size',
            description: 'The total amount of space the Document occupies, counting all versions.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'PageCount',
            displayName: 'Page count',
            description: 'Read-only field for storing the number of pages in the document. It is filled by the document preview generator.',
            readOnly: false,
            compulsory: false,
            defaultValue: '-4',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'MimeType',
            displayName: 'Document MIME type',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Shapes',
            displayName: 'Shapes',
            description: 'Stores data used for document preview (redaction, highlight, annotation shapes). This value can be modified by the document preview plugin.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'PageAttributes',
            displayName: 'Page attributes',
            description: 'Stores data used for document preview (for example page rotation). This value can be modified by the document preview plugin.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Watermark',
            displayName: 'Watermark',
            description: 'The text that is displayed as a watermark on the document preview. The format can be set by modifying the Document Preview settings.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.FileCTD = FileCTD;
    function ContentViewCTD() {
        let options = {
            DisplayName: '$Ctd-ContentView,DisplayName',
            Description: '$Ctd-ContentView,Description',
            Icon: 'ContentView',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ContentViewCTD = ContentViewCTD;
    function ContractCTD() {
        let options = {
            DisplayName: '$Ctd-Contract,DisplayName',
            Description: '$Ctd-Contract,Description',
            Icon: 'Document',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ContractId',
            displayName: 'Contract ID',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            selectionRoots: ['/Root/Sites/Default_Site/workspaces/Sales'],
            name: 'Project',
            displayName: 'Project',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: true,
            allowMultiple: false,
            options: [
                { Value: 'hu', Text: 'Magyar', Enabled: true, Selected: true },
                { Value: 'en', Text: 'English', Enabled: true, Selected: false },
                { Value: 'de', Text: 'Deutsch', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Language',
            displayName: 'Language',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'Responsee',
            displayName: 'Account',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Lawyer',
            displayName: 'Lawyer',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Keywords',
            displayName: 'Keywords',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            selectionRoots: ['/Root/Sites/Default_Site/workspaces/Sales'],
            name: 'RelatedDocs',
            displayName: 'Related documents',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ContractCTD = ContractCTD;
    function DynamicJsonContentCTD() {
        let options = {
            DisplayName: 'Dynamic JSON content',
            Description: '',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DynamicJsonContentCTD = DynamicJsonContentCTD;
    function ExecutableFileCTD() {
        let options = {
            DisplayName: '$Ctd-ExecutableFile,DisplayName',
            Description: '$Ctd-ExecutableFile,Description',
            Icon: 'Application',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ExecutableFileCTD = ExecutableFileCTD;
    function FieldControlTemplateCTD() {
        let options = {
            DisplayName: '$Ctd-FieldControlTemplate,DisplayName',
            Description: '$Ctd-FieldControlTemplate,Description',
            Icon: 'Content',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.FieldControlTemplateCTD = FieldControlTemplateCTD;
    function HtmlTemplateCTD() {
        let options = {
            DisplayName: '$Ctd-HtmlTemplate,DisplayName',
            Description: '$Ctd-HtmlTemplate,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'TemplateText',
            displayName: 'Template text',
            description: 'Shows the contents of the html file as a text.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.HtmlTemplateCTD = HtmlTemplateCTD;
    function ImageCTD() {
        let options = {
            DisplayName: '$Ctd-Image,DisplayName',
            Description: '$Ctd-Image,Description',
            Icon: 'Image',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Keywords',
            displayName: 'Keywords',
            description: 'Keywords describing the image.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'DateTaken',
            displayName: 'Date taken',
            description: 'Date the photo was taken, if applicable.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Width',
            displayName: 'Width',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Height',
            displayName: 'Height',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ImageCTD = ImageCTD;
    function PreviewImageCTD() {
        let options = {
            DisplayName: '$Ctd-PreviewImage,DisplayName',
            Description: '$Ctd-PreviewImage,Description',
            Icon: 'Image',
            AllowIndexing: false,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PreviewImageCTD = PreviewImageCTD;
    function OrderFormCTD() {
        let options = {
            DisplayName: '$Ctd-OrderForm,DisplayName',
            Description: '$Ctd-OrderForm,Description',
            Icon: 'Document',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'CompanyName',
            displayName: 'Company Name',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'OrderFormId',
            displayName: 'Order Form Id',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'CompanySeat',
            displayName: 'Company Seat',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'RepresentedBy',
            displayName: 'Represented by',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ContactEmailAddress',
            displayName: 'Contact email address',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ContactPhoneNr',
            displayName: 'Contact phone nr',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.OrderFormCTD = OrderFormCTD;
    function SettingsCTD() {
        let options = {
            DisplayName: '$Ctd-Settings,DisplayName',
            Description: '$Ctd-Settings,Description',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'GlobalOnly',
            displayName: 'Global only',
            description: 'Switching this ON will prevent the creation of local settings with the same name preventing others to gain access to the contents of this settings file through inheritance.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SettingsCTD = SettingsCTD;
    function ADSettingsCTD() {
        let options = {
            DisplayName: '$Ctd-ADSettings,DisplayName',
            Description: '$Ctd-ADSettings,Description',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ADSettingsCTD = ADSettingsCTD;
    function IndexingSettingsCTD() {
        let options = {
            DisplayName: '$Ctd-IndexingSettings,DisplayName',
            Description: '$Ctd-IndexingSettings,Description',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'TextExtractorInstances',
            displayName: 'Text extractor instances',
            description: 'Dynamically generated text extractor instance collection.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.IndexingSettingsCTD = IndexingSettingsCTD;
    function LoggingSettingsCTD() {
        let options = {
            DisplayName: '$Ctd-LoggingSettings,DisplayName',
            Description: '$Ctd-LoggingSettings,Description',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.LoggingSettingsCTD = LoggingSettingsCTD;
    function PortalSettingsCTD() {
        let options = {
            DisplayName: '$Ctd-PortalSettings,DisplayName',
            Description: '$Ctd-PortalSettings,Description',
            Icon: 'Settings',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PortalSettingsCTD = PortalSettingsCTD;
    function SystemFileCTD() {
        let options = {
            DisplayName: '$Ctd-SystemFile,DisplayName',
            Description: '$Ctd-SystemFile,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SystemFileCTD = SystemFileCTD;
    function MasterPageCTD() {
        let options = {
            DisplayName: '$Ctd-MasterPage,DisplayName',
            Description: '$Ctd-MasterPage,Description',
            Icon: 'MasterPage',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.MasterPageCTD = MasterPageCTD;
    function PageTemplateCTD() {
        let options = {
            DisplayName: '$Ctd-PageTemplate,DisplayName',
            Description: '$Ctd-PageTemplate,Description',
            Icon: 'PageTemplate',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowedTypes: ['MasterPage'],
            name: 'MasterPageNode',
            displayName: 'MasterPage node',
            description: 'Master page reference. Only for internal use.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.PageTemplateCTD = PageTemplateCTD;
    function ResourceCTD() {
        let options = {
            DisplayName: '$Ctd-Resource,DisplayName',
            Description: '$Ctd-Resource,Description',
            Icon: 'Resource',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'Downloads',
            displayName: 'Downloads',
            description: 'The number of downloads.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ResourceCTD = ResourceCTD;
    function UserControlCTD() {
        let options = {
            DisplayName: '$Ctd-UserControl,DisplayName',
            Description: '$Ctd-UserControl,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.UserControlCTD = UserControlCTD;
    function ViewBaseCTD() {
        let options = {
            DisplayName: '$Ctd-ViewBase,DisplayName',
            Description: '$Ctd-ViewBase,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsDefault',
            displayName: 'Default',
            description: 'Whether this is the default view on the parent ContentList.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'Template',
            displayName: 'Markup template',
            description: 'The Xslt template used to generate the view.',
            readOnly: false,
            compulsory: false,
            defaultValue: '/Root/System/SystemPlugins/Templates/ListView.xslt',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'FilterXml',
            displayName: 'Filtering',
            description: 'Define filtering rules for the view.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Default', Enabled: true, Selected: false },
                { Value: '1', Text: 'Enabled', Enabled: true, Selected: false },
                { Value: '2', Text: 'Disabled', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Search.FilterStatus',
            name: 'EnableAutofilters',
            displayName: 'Enable autofilters',
            description: 'If autofilters are enabled system content will be filtered from the query.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Default', Enabled: true, Selected: false },
                { Value: '1', Text: 'Enabled', Enabled: true, Selected: false },
                { Value: '2', Text: 'Disabled', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Search.FilterStatus',
            name: 'EnableLifespanFilter',
            displayName: 'Enable lifespan filter',
            description: 'If lifespan filter is enabled only valid content will be in the result.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'QueryTop',
            displayName: 'Top',
            description: 'If you do not want to display all content please specify here a value greater than 0.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'QuerySkip',
            displayName: 'Skip',
            description: 'If you do not want to display the first several content please specify here a value greater than 0.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ViewBaseCTD = ViewBaseCTD;
    function ListViewCTD() {
        let options = {
            DisplayName: '$Ctd-ListView,DisplayName',
            Description: '$Ctd-ListView,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Columns',
            displayName: 'View composition',
            description: 'Select the fields of the Content List to be displayed.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:ColumnSelector'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SortBy',
            displayName: 'Sort by',
            description: 'Select the column to sort by.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:SortingEditor'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'GroupBy',
            displayName: 'Group by',
            description: 'Select the column to group by. This setting only works if the view template is capable of rendering grouped items.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:GroupingEditor'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Flat',
            displayName: 'Flat',
            description: 'Flatten contained content structure to a single list (display content from all depths).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'MainScenario',
            displayName: 'Main scenario',
            description: 'Name of the scenario that is used for the list item menus. If you leave this empty, this will be the default \'ListItem\' scenario.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ListViewCTD = ListViewCTD;
    function VideoCTD() {
        let options = {
            DisplayName: '$Ctd-Video,DisplayName',
            Description: '$Ctd-Video,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Keywords',
            displayName: 'Keywords',
            description: 'Add keywords',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.VideoCTD = VideoCTD;
    function WorkflowDefinitionCTD() {
        let options = {
            DisplayName: '$Ctd-WorkflowDefinition,DisplayName',
            Description: '$Ctd-WorkflowDefinition,Description',
            Icon: 'workflowdef',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ContentWorkflow',
            displayName: 'Content workflow',
            description: 'True for workflow types that are related to one content (e.g. approval or printing). Related content must be an existing content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AssignableToContentList',
            displayName: 'Assignable to content list',
            description: 'Set this for workflow types that users should be able to assign to content lists (e.g. a Document Library).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AbortOnRelatedContentChange',
            displayName: 'Abort on related content change',
            description: 'If set to true workflow will be automatically aborted whenever the Related Content changes.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Delete when completed', Enabled: true, Selected: false },
                { Value: '1', Text: 'Delete when completed or aborted', Enabled: true, Selected: false },
                { Value: '2', Text: 'Always keep', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Workflow.WorkflowDeletionStrategy',
            name: 'DeleteInstanceAfterFinished',
            displayName: 'Automatic deletion',
            description: 'Automatic deletion of the workflow instance when it is finished. Choose the deletion method.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WorkflowDefinitionCTD = WorkflowDefinitionCTD;
    function FolderCTD() {
        let options = {
            DisplayName: '$Ctd-Folder,DisplayName',
            Description: '$Ctd-Folder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.FolderCTD = FolderCTD;
    function ADFolderCTD() {
        let options = {
            DisplayName: '$Ctd-ADFolder,DisplayName',
            Description: '$Ctd-ADFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['User', 'RegisteredUser', 'Group', 'OrganizationalUnit', 'ADFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SyncGuid',
            displayName: 'SyncGuid',
            description: 'GUID of corresponding AD object.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'LastSync',
            displayName: 'LastSync',
            description: 'Date of last synchronization.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ADFolderCTD = ADFolderCTD;
    function ArticleSectionCTD() {
        let options = {
            DisplayName: '$Ctd-ArticleSection,DisplayName',
            Description: '$Ctd-ArticleSection,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ArticleSection', 'Article'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ArticleSectionCTD = ArticleSectionCTD;
    function ContentListCTD() {
        let options = {
            DisplayName: '$Ctd-ContentList,DisplayName',
            Description: '$Ctd-ContentList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ContentListDefinition',
            displayName: 'List Definition',
            description: 'XML definition for additional fields.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'DefaultView',
            displayName: 'Default view',
            description: 'The default View to use.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['ListView'],
            name: 'AvailableViews',
            displayName: 'Available views',
            description: 'Select global content list views here that you want to offer users to choose from.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['FieldSettingContent'],
            name: 'FieldSettingContents',
            displayName: 'FieldSetting content',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['FieldSettingContent'],
            name: 'AvailableContentTypeFields',
            displayName: 'Available ContentType Field content.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ListEmail',
            displayName: 'Email address of Content List',
            description: 'Emails sent to this address will be imported as Email content into the Document Library.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ExchangeSubscriptionId',
            displayName: 'Exchange Subscription Id',
            description: 'Ctd-ContentListen-USExchangeSubscriptionId-Descriptione',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'OverwriteFiles',
            displayName: 'Overwrite files with same name',
            description: 'If checked new emails and attachments with the same name will overwrite existing items in list. Otherwise increment suffix is used in the name of new mail items.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'email', Text: 'Save all attachments as children of separate Email content', Enabled: true, Selected: true },
                { Value: 'root', Text: 'Save all attachments in root', Enabled: true, Selected: false },
                { Value: 'subject', Text: 'Save all attachments in folders grouped by subject', Enabled: true, Selected: false },
                { Value: 'sender', Text: 'Save all attachments in folders grouped by sender', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'GroupAttachments',
            displayName: 'Group attachments',
            description: 'Select the appropriate option to group attachment files under folders or email content or not.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'SaveOriginalEmail',
            displayName: 'Save original email',
            description: 'A separate .eml file will be created for every incoming email.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            selectionRoots: ['/Root/System/Schema/ContentTypes/GenericContent/Workflow/MailProcessorWorkflow'],
            name: 'IncomingEmailWorkflow',
            displayName: 'Incoming email workflow',
            description: 'Select the workflow to be executed on every incoming email.',
            readOnly: false,
            compulsory: false,
            defaultValue: '/Root/System/Schema/ContentTypes/GenericContent/Workflow/MailProcessorWorkflow',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'OnlyFromLocalGroups',
            displayName: 'Accept e-mails only from users in local groups',
            description: 'If set, only users that are members of any local group are able to send e-mails to this library.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'InboxFolder',
            displayName: 'Inbox folder',
            description: 'A relative path of a folder to store incoming e-mails.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'OwnerWhenVisitor',
            displayName: 'Owner of items created by visitor',
            description: 'If a Visitor adds content to this list, this user will be set as the creator instead of the Visitor. This prevents visitors see each others\' content.',
            readOnly: false,
            compulsory: false,
            defaultValue: '/Root/IMS/BuiltIn/Portal/Admin',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ContentListCTD = ContentListCTD;
    function AspectCTD() {
        let options = {
            DisplayName: '$Ctd-Aspect,DisplayName',
            Description: '$Ctd-Aspect,Description',
            Icon: 'Aspect',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'AspectDefinition',
            displayName: 'Aspect definition',
            description: 'Definition of the extension in XML format.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.AspectCTD = AspectCTD;
    function ItemListCTD() {
        let options = {
            DisplayName: '$Ctd-ItemList,DisplayName',
            Description: '$Ctd-ItemList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ItemListCTD = ItemListCTD;
    function CustomListCTD() {
        let options = {
            DisplayName: '$Ctd-CustomList,DisplayName',
            Description: '$Ctd-CustomList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ListItem'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.CustomListCTD = CustomListCTD;
    function EventListCTD() {
        let options = {
            DisplayName: '$Ctd-EventList,DisplayName',
            Description: '$Ctd-EventList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['CalendarEvent'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Folder'],
            name: 'RegistrationFolder',
            displayName: 'Registration folder',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.EventListCTD = EventListCTD;
    function FormCTD() {
        let options = {
            DisplayName: '$Ctd-Form,DisplayName',
            Description: '$Ctd-Form,Description',
            Icon: 'Form',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['FormItem'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'TitleSubmitter',
            displayName: 'Submitter Mail Title',
            description: 'This is the title of the submitter mail.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'AfterSubmitText',
            displayName: 'AfterSubmitText',
            description: 'This is the text displayed after the form is submitted.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'EmailList',
            displayName: 'Email List',
            description: 'The list of email addresses to where a notification message containing submitted values are sent after submitting the form. The addresses should be separated by ";" or ",".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailFrom',
            displayName: 'Email From',
            description: 'This address is displayed in the "From" field of the notification email. Default is "mailerservice@example.com".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailFromSubmitter',
            displayName: 'Submitter Email From',
            description: 'This address is displayed in the "From" field of the user notification email. Default is "mailerservice@example.com".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailField',
            displayName: 'Email Field',
            description: 'The name of the field specified among ContentList fields containing the submitter\'s email address. Ie.: "#Email" or "#SubmitterEmail".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'EmailTemplate',
            displayName: 'EmailTemplate',
            description: 'The template of the email message sent to the administrators. By default the template of notification email sent to the submitter is the same as the one sent to the recipients given in the email list above. Form content can be inserted with the "{0}" string.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'EmailTemplateSubmitter',
            displayName: 'SubmitterEmailTemplate',
            description: 'The template of the email message sent to the submitter. By default the template of notification email sent to the submitter is the same as the one sent to the recipients given in the email list above. Form content can be inserted with the "{0}" string.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        return schema;
    }
    Schemas.FormCTD = FormCTD;
    function EventRegistrationFormCTD() {
        let options = {
            DisplayName: '$Ctd-EventRegistrationForm,DisplayName',
            Description: '$Ctd-EventRegistrationForm,Description',
            Icon: 'Form',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['EventRegistrationFormItem'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.EventRegistrationFormCTD = EventRegistrationFormCTD;
    function ForumTopicCTD() {
        let options = {
            DisplayName: '$Ctd-ForumTopic,DisplayName',
            Description: '$Ctd-ForumTopic,Description',
            Icon: 'forumtopic',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ForumEntry'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ForumTopicCTD = ForumTopicCTD;
    function LinkListCTD() {
        let options = {
            DisplayName: '$Ctd-LinkList,DisplayName',
            Description: '$Ctd-LinkList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Link'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.LinkListCTD = LinkListCTD;
    function MemoListCTD() {
        let options = {
            DisplayName: '$Ctd-MemoList,DisplayName',
            Description: '$Ctd-MemoList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Memo'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.MemoListCTD = MemoListCTD;
    function SurveyCTD() {
        let options = {
            DisplayName: '$Ctd-Survey,DisplayName',
            Description: '$Ctd-Survey,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['SurveyItem'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'LandingPage',
            displayName: 'Landing page',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'PageContentView',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'InvalidSurveyPage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableNotificationMail',
            displayName: 'Enable notification e-mail',
            description: 'Enable sending notification e-mails.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SenderAddress',
            displayName: 'Sender Address',
            description: 'The e-mail address which will appear in the From field of the message.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['User', 'Group'],
            selectionRoots: ['/Root/IMS'],
            name: 'Evaluators',
            displayName: 'Evaluators',
            description: 'Users or groups who will receive a notification e-mail after the survey was filled and can be evaluated.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'MailTemplatePage',
            displayName: 'Notification e-mail template file',
            description: 'The path of the HTML file which gives the template of the notification e-mail.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableMoreFilling',
            displayName: 'Allow multiple responses',
            description: 'Do You want to allow a user to submit this survey more than once?',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SurveyCTD = SurveyCTD;
    function VotingCTD() {
        let options = {
            DisplayName: '$Ctd-Voting,DisplayName',
            Description: '$Ctd-Voting,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['VotingItem', 'Folder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'LandingPageContentView',
            displayName: 'Landing page content view',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'ResultPageContentView',
            displayName: 'Result page content view',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'VotingPageContentView',
            displayName: 'Voting Page Content View',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'CannotSeeResultContentView',
            displayName: 'Cannot see result page',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsResultVisibleBefore',
            displayName: 'Is Result Visible Before',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.VotingCTD = VotingCTD;
    function SurveyListCTD() {
        let options = {
            DisplayName: '$Ctd-SurveyList,DisplayName',
            Description: '$Ctd-SurveyList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: ['SurveyListItem', 'Folder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'RawJson',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'IntroText',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'OutroText',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'OutroRedirectLink',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            selectionRoots: [],
            name: 'LandingPage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'OnlySingleResponse',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableNotificationMail',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'EmailList',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailField',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailFrom',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'MailSubject',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'AdminEmailTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'SubmitterEmailTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        return schema;
    }
    Schemas.SurveyListCTD = SurveyListCTD;
    function TaskListCTD() {
        let options = {
            DisplayName: '$Ctd-TaskList,DisplayName',
            Description: '$Ctd-TaskList,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Task', 'ApprovalWorkflowTask', 'ExpenseClaimWorkflowTask'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.TaskListCTD = TaskListCTD;
    function LibraryCTD() {
        let options = {
            DisplayName: '$Ctd-Library,DisplayName',
            Description: '$Ctd-Library,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.LibraryCTD = LibraryCTD;
    function DocumentLibraryCTD() {
        let options = {
            DisplayName: '$Ctd-DocumentLibrary,DisplayName',
            Description: '$Ctd-DocumentLibrary,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Folder', 'File'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DocumentLibraryCTD = DocumentLibraryCTD;
    function ImageLibraryCTD() {
        let options = {
            DisplayName: '$Ctd-ImageLibrary,DisplayName',
            Description: '$Ctd-ImageLibrary,Description',
            Icon: 'ContentList',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Folder', 'Image'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Image'],
            name: 'CoverImage',
            displayName: 'Cover image',
            description: 'Select cover image',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ImageLibraryCTD = ImageLibraryCTD;
    function ContentViewsCTD() {
        let options = {
            DisplayName: '$Ctd-ContentViews,DisplayName',
            Description: '$Ctd-ContentViews,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ContentView', 'ContentViews'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ContentViewsCTD = ContentViewsCTD;
    function DeviceCTD() {
        let options = {
            DisplayName: '$Ctd-Device,DisplayName',
            Description: '$Ctd-Device,Description',
            Icon: 'Device',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserAgentPattern',
            displayName: 'User agent string',
            description: 'A regular expression to match the user agent string of the browser.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.DeviceCTD = DeviceCTD;
    function DiscussionForumCTD() {
        let options = {
            DisplayName: '$Ctd-DiscussionForum,DisplayName',
            Description: '$Ctd-DiscussionForum,Description',
            Icon: 'forum',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ForumTopic'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DiscussionForumCTD = DiscussionForumCTD;
    function DocumentWorkspaceFolderCTD() {
        let options = {
            DisplayName: '$Ctd-DocumentWorkspaceFolder,DisplayName',
            Description: '$Ctd-DocumentWorkspaceFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['DocumentWorkspace', 'DocumentWorkspaceFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DocumentWorkspaceFolderCTD = DocumentWorkspaceFolderCTD;
    function DomainCTD() {
        let options = {
            DisplayName: '$Ctd-Domain,DisplayName',
            Description: '$Ctd-Domain,Description',
            Icon: 'Domain',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['User', 'RegisteredUser', 'Group', 'OrganizationalUnit', 'ADFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SyncGuid',
            displayName: 'SyncGuid',
            description: 'GUID of corresponding AD object.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'LastSync',
            displayName: 'LastSync',
            description: 'Date of last synchronization.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.DomainCTD = DomainCTD;
    function DomainsCTD() {
        let options = {
            DisplayName: '$Ctd-Domains,DisplayName',
            Description: '$Ctd-Domains,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Domain'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DomainsCTD = DomainsCTD;
    function EmailCTD() {
        let options = {
            DisplayName: '$Ctd-Email,DisplayName',
            Description: '$Ctd-Email,Description',
            Icon: 'Document',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: ['File'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'From',
            displayName: 'From',
            description: 'Sender name and address.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.RichText,
            name: 'Body',
            displayName: 'Body',
            description: 'Body of email.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'Sent',
            displayName: 'Sent',
            description: 'Date of sending.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.EmailCTD = EmailCTD;
    function ExpenseClaimCTD() {
        let options = {
            DisplayName: '$Ctd-ExpenseClaim,DisplayName',
            Description: '$Ctd-ExpenseClaim,Description',
            Icon: 'expenseclaim',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ExpenseClaimItem'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Sum',
            displayName: 'Sum',
            description: 'The summation of the children items\' money.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ExpenseClaimCTD = ExpenseClaimCTD;
    function FieldControlTemplatesCTD() {
        let options = {
            DisplayName: '$Ctd-FieldControlTemplates,DisplayName',
            Description: '$Ctd-FieldControlTemplates,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['FieldControlTemplates', 'FieldControlTemplate'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.FieldControlTemplatesCTD = FieldControlTemplatesCTD;
    function KPIDatasourceCTD() {
        let options = {
            DisplayName: '$Ctd-KPIDatasource,DisplayName',
            Description: '$Ctd-KPIDatasource,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['File'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'KPIData',
            displayName: 'KPI data',
            description: 'XML presenting KPI data.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.KPIDatasourceCTD = KPIDatasourceCTD;
    function KPIDatasourcesCTD() {
        let options = {
            DisplayName: '$Ctd-KPIDatasources,DisplayName',
            Description: '$Ctd-KPIDatasources,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['KPIDatasource'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.KPIDatasourcesCTD = KPIDatasourcesCTD;
    function OrganizationalUnitCTD() {
        let options = {
            DisplayName: '$Ctd-OrganizationalUnit,DisplayName',
            Description: '$Ctd-OrganizationalUnit,Description',
            Icon: 'OrgUnit',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['User', 'RegisteredUser', 'Group', 'OrganizationalUnit', 'ADFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SyncGuid',
            displayName: 'SyncGuid',
            description: 'GUID of corresponding AD object.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'LastSync',
            displayName: 'LastSync',
            description: 'Date of last synchronization.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.OrganizationalUnitCTD = OrganizationalUnitCTD;
    function OtherWorkspaceFolderCTD() {
        let options = {
            DisplayName: '$Ctd-OtherWorkspaceFolder,DisplayName',
            Description: '$Ctd-OtherWorkspaceFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Workspace'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.OtherWorkspaceFolderCTD = OtherWorkspaceFolderCTD;
    function PortalRootCTD() {
        let options = {
            DisplayName: '$Ctd-PortalRoot,DisplayName',
            Description: '$Ctd-PortalRoot,Description',
            Icon: 'PortalRoot',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Folder', 'TrashBin', 'DocumentLibrary', 'CustomList', 'Sites', 'KPIDatasources', 'Domains', 'Profiles', 'Portlets', 'Resources', 'Skins'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PortalRootCTD = PortalRootCTD;
    function PortletCategoryCTD() {
        let options = {
            DisplayName: '$Ctd-PortletCategory,DisplayName',
            Description: '$Ctd-PortletCategory,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Portlet', 'Image'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PortletCategoryCTD = PortletCategoryCTD;
    function PostsCTD() {
        let options = {
            DisplayName: '$Ctd-Posts,DisplayName',
            Description: '$Ctd-Posts,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Post'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PostsCTD = PostsCTD;
    function ProfileDomainCTD() {
        let options = {
            DisplayName: '$Ctd-ProfileDomain,DisplayName',
            Description: '$Ctd-ProfileDomain,Description',
            Icon: 'Domain',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['UserProfile'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ProfileDomainCTD = ProfileDomainCTD;
    function ProfilesCTD() {
        let options = {
            DisplayName: '$Ctd-Profiles,DisplayName',
            Description: '$Ctd-Profiles,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ProfileDomain'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ProfilesCTD = ProfilesCTD;
    function ProjectWorkspaceFolderCTD() {
        let options = {
            DisplayName: '$Ctd-ProjectWorkspaceFolder,DisplayName',
            Description: '$Ctd-ProjectWorkspaceFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['ProjectWorkspace', 'ProjectWorkspaceFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ProjectWorkspaceFolderCTD = ProjectWorkspaceFolderCTD;
    function RuntimeContentContainerCTD() {
        let options = {
            DisplayName: '$Ctd-RuntimeContentContainer,DisplayName',
            Description: '$Ctd-RuntimeContentContainer,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.RuntimeContentContainerCTD = RuntimeContentContainerCTD;
    function SalesWorkspaceFolderCTD() {
        let options = {
            DisplayName: '$Ctd-SalesWorkspaceFolder,DisplayName',
            Description: '$Ctd-SalesWorkspaceFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['SalesWorkspace', 'SalesWorkspaceFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SalesWorkspaceFolderCTD = SalesWorkspaceFolderCTD;
    function SitesCTD() {
        let options = {
            DisplayName: '$Ctd-Sites,DisplayName',
            Description: '$Ctd-Sites,Description',
            Icon: 'Site',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Site'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SitesCTD = SitesCTD;
    function SmartFolderCTD() {
        let options = {
            DisplayName: '$Ctd-SmartFolder,DisplayName',
            Description: '$Ctd-SmartFolder,Description',
            Icon: 'SmartFolder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Query',
            displayName: 'Query',
            description: 'Please give a query here that you want to use for collecting the children of this smart folder.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:QueryBuilder'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Default', Enabled: true, Selected: false },
                { Value: '1', Text: 'Enabled', Enabled: true, Selected: false },
                { Value: '2', Text: 'Disabled', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Search.FilterStatus',
            name: 'EnableAutofilters',
            displayName: 'Enable autofilters',
            description: 'If autofilters are enabled, system content will be filtered from the query.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Default', Enabled: true, Selected: false },
                { Value: '1', Text: 'Enabled', Enabled: true, Selected: false },
                { Value: '2', Text: 'Disabled', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Search.FilterStatus',
            name: 'EnableLifespanFilter',
            displayName: 'Enable lifespan filter',
            description: 'If lifespan filter is enabled, only valid content will be in the result.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SmartFolderCTD = SmartFolderCTD;
    function ContentRotatorCTD() {
        let options = {
            DisplayName: '$Ctd-ContentRotator,DisplayName',
            Description: '$Ctd-ContentRotator,Description',
            Icon: 'SmartFolder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'Random', Text: 'Random', Enabled: true, Selected: true },
                { Value: 'First', Text: 'First', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'SelectionMode',
            displayName: 'Selection Mode',
            description: 'Choose selection mode that defines which node (content) should be selected.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'DefaultOrder', Text: 'Default order', Enabled: true, Selected: true },
                { Value: 'ValidityOrder', Text: 'Validity order', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'OrderingMode',
            displayName: 'Ordering Mode',
            description: 'Choose ordering mode that defines the order of nodes before selection.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ContentRotatorCTD = ContentRotatorCTD;
    function SystemFolderCTD() {
        let options = {
            DisplayName: '$Ctd-SystemFolder,DisplayName',
            Description: '$Ctd-SystemFolder,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SystemFolderCTD = SystemFolderCTD;
    function PortletsCTD() {
        let options = {
            DisplayName: '$Ctd-Portlets,DisplayName',
            Description: '$Ctd-Portlets,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['PortletCategory'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.PortletsCTD = PortletsCTD;
    function ResourcesCTD() {
        let options = {
            DisplayName: '$Ctd-Resources,DisplayName',
            Description: '$Ctd-Resources,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Resource'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ResourcesCTD = ResourcesCTD;
    function SkinCTD() {
        let options = {
            DisplayName: '$Ctd-Skin,DisplayName',
            Description: '$Ctd-Skin,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['SystemFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'NewSkin',
            displayName: 'New skin',
            readOnly: false,
            compulsory: false,
            defaultValue: 'false',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SkinCTD = SkinCTD;
    function SkinsCTD() {
        let options = {
            DisplayName: '$Ctd-Skins,DisplayName',
            Description: '$Ctd-Skins,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Skin'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SkinsCTD = SkinsCTD;
    function TrashBagCTD() {
        let options = {
            DisplayName: '$Ctd-TrashBag,DisplayName',
            Description: '$Ctd-TrashBag,Description',
            Icon: 'Folder',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            name: 'KeepUntil',
            displayName: 'Keep until',
            description: 'The bag must be kept until this date.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'OriginalPath',
            displayName: 'Original path',
            description: 'The path where the bag content were deleted from.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'WorkspaceRelativePath',
            displayName: 'Ctd-TrashBagen-USWorkspaceRelativePath-DisplayName',
            description: 'Ctd-TrashBagen-USWorkspaceRelativePath-Description',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'WorkspaceId',
            displayName: 'Ctd-TrashBagen-USWorkspaceId-DisplayName',
            description: 'Ctd-TrashBagen-USWorkspaceId-Description',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'DeletedContent',
            displayName: 'Deleted content',
            description: 'The actual deleted content inside this trash bag.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.TrashBagCTD = TrashBagCTD;
    function WorkspaceCTD() {
        let options = {
            DisplayName: '$Ctd-Workspace,DisplayName',
            Description: '$Ctd-Workspace,Description',
            Icon: 'Workspace',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'Posts', 'Workspace', 'DocumentWorkspace', 'ProjectWorkspace', 'SalesWorkspace', 'Wiki'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS', '/Root'],
            name: 'Manager',
            displayName: 'Project manager',
            description: 'The person responsible for the project.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'Deadline',
            displayName: 'Project deadline',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsActive',
            displayName: 'Active',
            description: 'This workspace is currently active.',
            readOnly: false,
            compulsory: true,
            defaultValue: 'true',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Skin'],
            selectionRoots: ['/Root/Skins'],
            name: 'WorkspaceSkin',
            displayName: 'Skin',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsCritical',
            displayName: 'Is critical',
            description: 'This workspace is currently in a critical status.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsWallContainer',
            displayName: 'Wall Container',
            description: 'This workspace is configured to contain a wall - this indicates that posts are created under this workspace if Content are shared anywhere below this path.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsFollowed',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WorkspaceCTD = WorkspaceCTD;
    function BlogCTD() {
        let options = {
            DisplayName: '$Ctd-Blog,DisplayName',
            Description: '$Ctd-Blog,Description',
            Icon: 'Wiki',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Folder', 'BlogPost'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ShowAvatar',
            displayName: 'Show avatar',
            description: 'According to your settings the blogger\'s avatar is shown by the title of the post.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.BlogCTD = BlogCTD;
    function DocumentWorkspaceCTD() {
        let options = {
            DisplayName: '$Ctd-DocumentWorkspace,DisplayName',
            Description: '$Ctd-DocumentWorkspace,Description',
            Icon: 'workspace-document',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'Posts'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.DocumentWorkspaceCTD = DocumentWorkspaceCTD;
    function ProjectWorkspaceCTD() {
        let options = {
            DisplayName: '$Ctd-ProjectWorkspace,DisplayName',
            Description: '$Ctd-ProjectWorkspace,Description',
            Icon: 'workspace-project',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'Posts'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            minValue: 0,
            maxValue: 1,
            digits: 2,
            showAsPercentage: true,
            name: 'Completion',
            displayName: 'Completion',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ProjectWorkspaceCTD = ProjectWorkspaceCTD;
    function SalesWorkspaceCTD() {
        let options = {
            DisplayName: '$Ctd-SalesWorkspace,DisplayName',
            Description: '$Ctd-SalesWorkspace,Description',
            Icon: 'workspace-sales',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'Posts'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Customer',
            displayName: 'Customer',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.CurrencyFieldSetting({
            format: 'en-US',
            minValue: 0,
            digits: 0,
            name: 'ExpectedRevenue',
            displayName: 'Expected revenue',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            minValue: 0,
            maxValue: 1,
            digits: 2,
            showAsPercentage: true,
            name: 'ChanceOfWinning',
            displayName: 'Chance of winning',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'StartDate',
            displayName: 'Start date',
            readOnly: false,
            compulsory: false,
            defaultValue: '[Script:jScript] DateTime.UtcNow; [/Script]',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Contacts',
            displayName: 'Contacts',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Notes',
            displayName: 'Notes',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            minValue: 0,
            maxValue: 1,
            digits: 2,
            showAsPercentage: true,
            name: 'Completion',
            displayName: 'Progress',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ContractSigned',
            displayName: 'Contract signed',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ContractSignedDate',
            displayName: 'Contract signed date',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SalesWorkspaceCTD = SalesWorkspaceCTD;
    function SiteCTD() {
        let options = {
            DisplayName: '$Ctd-Site,DisplayName',
            Description: '$Ctd-Site,Description',
            Icon: 'Site',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Folder', 'Page', 'Workspace', 'DocumentWorkspace', 'ProjectWorkspace', 'SalesWorkspace', 'Image', 'GoogleSitemap', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'SmartFolder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'en', Text: 'English', Enabled: true, Selected: true },
                { Value: 'hu', Text: 'Hungarian', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Language',
            displayName: 'Language',
            description: 'Please define the default language of this site.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableClientBasedCulture',
            displayName: 'Enable client-based culture',
            description: 'Enable this to allow user browser settings override default site language settings.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'EnableUserBasedCulture',
            displayName: 'Enable user-based culture',
            description: 'Enable this to allow user language settings override default site language settings.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'UrlList',
            displayName: 'URL list',
            description: 'Select the URLs to associate with this Site.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            selectionRoots: ['.'],
            name: 'StartPage',
            displayName: 'Alternative start page',
            description: 'If set, the site will use this start page instead of the default.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            selectionRoots: ['.'],
            name: 'LoginPage',
            displayName: 'Login page',
            description: 'The login page to display when a user tries to access restricted Content (Forms authentication only).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Skin'],
            selectionRoots: ['/Root/Skins'],
            name: 'SiteSkin',
            displayName: 'Skin',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'DenyCrossSiteAccess',
            displayName: 'Deny cross-site access',
            description: 'If set, content under this site can only be accessed via this site and not via other sites using a Root relative path.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SiteCTD = SiteCTD;
    function TeamWorkspaceCTD() {
        let options = {
            DisplayName: '$Ctd-TeamWorkspace,DisplayName',
            Description: '$Ctd-TeamWorkspace,Description',
            Icon: 'workspace',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'Blog', 'DocumentLibrary', 'ImageLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'Survey', 'Voting', 'DiscussionForum', 'Form', 'CustomList', 'Posts'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.TeamWorkspaceCTD = TeamWorkspaceCTD;
    function TrashBinCTD() {
        let options = {
            DisplayName: '$Ctd-TrashBin,DisplayName',
            Description: '$Ctd-TrashBin,Description',
            Icon: 'trash',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['TrashBag'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            minValue: 0,
            name: 'MinRetentionTime',
            displayName: 'Minimum retention time (in days)',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            minValue: 0,
            name: 'SizeQuota',
            displayName: 'Size quota',
            description: 'Set the size quote for the trash bin (Megabytes).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            minValue: 0,
            name: 'BagCapacity',
            displayName: 'Trashbag capacity',
            description: 'The maximum number of nodes accepted for trash in a single operation.',
            readOnly: false,
            compulsory: false,
            defaultValue: '100',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.TrashBinCTD = TrashBinCTD;
    function UserProfileCTD() {
        let options = {
            DisplayName: '$Ctd-UserProfile,DisplayName',
            Description: '$Ctd-UserProfile,Description',
            Icon: 'UserProfile',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Blog', 'DocumentLibrary', 'EventList', 'MemoList', 'LinkList', 'TaskList', 'ImageLibrary', 'Posts', 'CustomList'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'User',
            displayName: 'User',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.UserProfileCTD = UserProfileCTD;
    function WikiCTD() {
        let options = {
            DisplayName: '$Ctd-Wiki,DisplayName',
            Description: '$Ctd-Wiki,Description',
            Icon: 'Wiki',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Page', 'Folder', 'WikiArticle', 'Image'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.WikiCTD = WikiCTD;
    function GroupCTD() {
        let options = {
            DisplayName: '$Ctd-Group,DisplayName',
            Description: '$Ctd-Group,Description',
            Icon: 'Group',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['User', 'Group'],
            selectionRoots: ['/Root/IMS', '/Root'],
            name: 'Members',
            displayName: 'Members',
            description: 'The members of this group.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SyncGuid',
            displayName: 'Sync Guid',
            description: 'GUID of corresponding AD object.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'LastSync',
            displayName: 'Last synchronization',
            description: 'Date of last synchronization.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.GroupCTD = GroupCTD;
    function ListItemCTD() {
        let options = {
            DisplayName: '$Ctd-ListItem,DisplayName',
            Description: '$Ctd-ListItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.ListItemCTD = ListItemCTD;
    function BlogPostCTD() {
        let options = {
            DisplayName: '$Ctd-BlogPost,DisplayName',
            Description: '$Ctd-BlogPost,Description',
            Icon: 'WikiArticle',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'LeadingText',
            displayName: 'Blog post leading text',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'BodyText',
            displayName: 'Blog post body text',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsPublished',
            displayName: 'Published',
            description: 'Specifies whether this blog post is published and can be seen in the blog.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'PublishedOn',
            displayName: 'Publish date',
            description: 'The blog post will appear after this date.',
            readOnly: false,
            compulsory: true,
            defaultValue: '[Script:jScript] DateTime.UtcNow; [/Script]',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.BlogPostCTD = BlogPostCTD;
    function CalendarEventCTD() {
        let options = {
            DisplayName: '$Ctd-CalendarEvent,DisplayName',
            Description: '$Ctd-CalendarEvent,Description',
            Icon: 'CalendarEvent',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Location',
            displayName: 'Location',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'StartDate',
            displayName: 'Start date',
            readOnly: false,
            compulsory: true,
            defaultValue: '[Script:jScript] DateTime.UtcNow; [/Script]',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'EndDate',
            displayName: 'End date',
            readOnly: false,
            compulsory: true,
            defaultValue: '[Script:jScript] DateTime.UtcNow; [/Script]',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Lead',
            displayName: 'Lead',
            description: 'Short lead of the event.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AllDay',
            displayName: 'All-day event',
            description: 'The event encompasses one or more entire days.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EventUrl',
            displayName: 'URL',
            description: 'Further information on event.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'RequiresRegistration',
            displayName: 'Requires registration',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['EventRegistrationForm'],
            selectionRoots: ['/Root'],
            name: 'RegistrationForm',
            displayName: 'Registration form',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'OwnerEmail',
            displayName: 'Event owner\'s e-mail',
            description: 'The list of email addresses to where a notification message containing submitted values are sent after submitting the form. The addresses should be separated by ";", "," or new line.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'E-mail', Text: 'Email', Enabled: true, Selected: true },
                { Value: 'E-mail digest', Text: 'Email Digest', Enabled: true, Selected: false },
                { Value: 'None', Text: 'None', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'NotificationMode',
            displayName: 'Notification mode',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'EmailTemplate',
            displayName: 'Email template',
            description: 'The template of the email message sent to the administrators. By default the template of notification email sent to the submitter is the same as the one sent to the recipients given in the email list above. Form content can be inserted with the "{0}" string.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'EmailTemplateSubmitter',
            displayName: 'Submitter email template',
            description: 'The template of the email message sent to the submitter. By default the template of notification email sent to the submitter is the same as the one sent to the recipients given in the email list above. Form content can be inserted with the "{0}" string.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailFrom',
            displayName: 'Email from',
            description: 'This address is displayed in the "From" field of the notification email sen to the admin.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailFromSubmitter',
            displayName: 'Subbmitter email from',
            description: 'This address is displayed in the "From" field of the user notification email sent to submitters. Default is "mailerservice@example.com".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EmailField',
            displayName: 'Email field',
            description: 'The name of the field specified among ContentList fields containing the submitter\'s email address. Ie.: "#Email" or "#SubmitterEmail".',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'MaxParticipants',
            displayName: 'Max Participants',
            description: 'The maximum number of participants which can apply for the event.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'NumParticipants',
            displayName: 'Current number of participants',
            description: 'Current number of participants',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'Deadline', Text: 'Deadline', Enabled: true, Selected: true },
                { Value: 'Meeting', Text: 'Meeting', Enabled: true, Selected: false },
                { Value: 'Demo', Text: 'Demo', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'EventType',
            displayName: 'Event type',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.CalendarEventCTD = CalendarEventCTD;
    function CarCTD() {
        let options = {
            DisplayName: '$Ctd-Car,DisplayName',
            Description: '$Ctd-Car,Description',
            Icon: 'Car',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Make',
            displayName: 'Make',
            description: 'e.g. Mazda, Ferrari etc.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Model',
            displayName: 'Model',
            description: 'e.g. RX-8, F-40 etc.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: true,
            allowMultiple: false,
            options: [
                { Value: 'Sedan', Text: 'Sedan', Enabled: true, Selected: true },
                { Value: 'Coupe', Text: 'Coupe', Enabled: true, Selected: false },
                { Value: 'Cabrio', Text: 'Cabrio', Enabled: true, Selected: false },
                { Value: 'Roadster', Text: 'Roadster', Enabled: true, Selected: false },
                { Value: 'SUV', Text: 'SUV', Enabled: true, Selected: false },
                { Value: 'Van', Text: 'Van', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Style',
            displayName: 'Style',
            description: 'Select one of the car build-ups.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'StartingDate',
            displayName: 'Starting date',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ColorFieldSetting({
            palette: '#ff0000;#f0d0c9;#e2a293;#d4735e;#65281a',
            name: 'Color',
            displayName: 'Color',
            description: '',
            readOnly: false,
            compulsory: false,
            defaultValue: '#ff0000',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EngineSize',
            displayName: 'EngineSize',
            description: 'EngineSize (litres).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Power',
            displayName: 'Power in hp',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'Price',
            displayName: 'Base price',
            description: 'Base price $.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.CarCTD = CarCTD;
    function CommentCTD() {
        let options = {
            DisplayName: '$Ctd-Comment,DisplayName',
            Description: '$Ctd-Comment,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.CommentCTD = CommentCTD;
    function ConfirmationItemCTD() {
        let options = {
            DisplayName: '$Ctd-ConfirmationItem,DisplayName',
            Description: '$Ctd-ConfirmationItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Confirmed',
            displayName: 'Confirmed',
            description: 'Set to true to confirm the operation.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ConfirmationItemCTD = ConfirmationItemCTD;
    function CustomListItemCTD() {
        let options = {
            DisplayName: '$Ctd-CustomListItem,DisplayName',
            Description: '$Ctd-CustomListItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'WorkflowsRunning',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.CustomListItemCTD = CustomListItemCTD;
    function ExpenseClaimItemCTD() {
        let options = {
            DisplayName: '$Ctd-ExpenseClaimItem,DisplayName',
            Description: '$Ctd-ExpenseClaimItem,Description',
            Icon: 'expenseclaimitem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.CurrencyFieldSetting({
            format: 'en-US',
            minValue: 0,
            digits: 0,
            name: 'Amount',
            displayName: 'Amount',
            description: 'The amount of money.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'Date',
            displayName: 'Date',
            description: 'The date of the claim.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ImageRef',
            displayName: 'Image of the Expense Claim (reference)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            name: 'ImageData',
            displayName: 'Image of the Expense Claim (binarydata)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ScannedImage',
            displayName: 'Scanned image',
            description: 'Scanned image of the invoice.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:Image'
        }));
        return schema;
    }
    Schemas.ExpenseClaimItemCTD = ExpenseClaimItemCTD;
    function FormItemCTD() {
        let options = {
            DisplayName: '$Ctd-FormItem,DisplayName',
            Description: '$Ctd-FormItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.FormItemCTD = FormItemCTD;
    function EventRegistrationFormItemCTD() {
        let options = {
            DisplayName: '$Ctd-EventRegistrationFormItem,DisplayName',
            Description: '$Ctd-EventRegistrationFormItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,4}$',
            name: 'Email',
            displayName: 'E-mail',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            minValue: 0,
            name: 'GuestNumber',
            displayName: 'Additional guests',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.EventRegistrationFormItemCTD = EventRegistrationFormItemCTD;
    function ForumEntryCTD() {
        let options = {
            DisplayName: '$Ctd-ForumEntry,DisplayName',
            Description: '$Ctd-ForumEntry,Description',
            Icon: 'forumentry',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['ForumEntry'],
            name: 'ReplyTo',
            displayName: 'Reply to',
            description: 'The previous message in the thread.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'ReplyToNo',
            displayName: 'Reply to number',
            description: 'The number of the previous message in the thread.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'SerialNo',
            displayName: 'Number',
            description: 'Entry number.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'PostedBy',
            displayName: 'Posted by',
            description: 'The user who posted the message.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ForumEntryCTD = ForumEntryCTD;
    function LikeCTD() {
        let options = {
            DisplayName: '$Ctd-Like,DisplayName',
            Description: '$Ctd-Like,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.LikeCTD = LikeCTD;
    function LinkCTD() {
        let options = {
            DisplayName: '$Ctd-Link,DisplayName',
            Description: '$Ctd-Link,Description',
            Icon: 'link',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '^(http|https)\\://([a-zA-Z0-9\\.\\-]+(\\:[a-zA-Z0-9\\.&%\\$\\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\\-]+\\.)*[a-zA-Z0-9\\-]+(\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|hu|[a-zA-Z]{2})){0,1})(\\:[0-9]+)*((\\#|/)($|[a-zA-Z0-9\\.\\,\\?\\\'\\\\\\+&%\\$#\\=~_\\-]+))*$',
            name: 'Url',
            displayName: 'URL',
            description: 'Type a URL to this field to represent a link to that URL.',
            readOnly: false,
            compulsory: false,
            defaultValue: 'http://',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.LinkCTD = LinkCTD;
    function MemoCTD() {
        let options = {
            DisplayName: '$Ctd-Memo,DisplayName',
            Description: '$Ctd-Memo,Description',
            Icon: 'Document',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'Date',
            displayName: 'Date',
            description: 'Please set the due date of the memo.',
            readOnly: false,
            compulsory: false,
            defaultValue: '[Script:jScript] DateTime.UtcNow; [/Script]',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: true,
            allowMultiple: false,
            options: [
                { Value: 'generic', Text: 'Generic', Enabled: true, Selected: true },
                { Value: 'iso', Text: 'ISO', Enabled: true, Selected: false },
                { Value: 'iaudit', Text: 'Internal audit', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'MemoType',
            displayName: 'Memo type',
            description: 'Type of the memo.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            name: 'SeeAlso',
            displayName: 'See also...',
            description: 'A list of content this memo pertains to.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.MemoCTD = MemoCTD;
    function PortletCTD() {
        let options = {
            DisplayName: '$Ctd-Portlet,DisplayName',
            Description: '$Ctd-Portlet,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'TypeName',
            displayName: 'Fully qualified type name',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ImageRef',
            displayName: 'Thumbnail image of portlet (reference)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            name: 'ImageData',
            displayName: 'Thumbnail image of portlet (binarydata)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'PortletImage',
            displayName: 'Thumbnail image of portlet',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:Image'
        }));
        return schema;
    }
    Schemas.PortletCTD = PortletCTD;
    function PostCTD() {
        let options = {
            DisplayName: '$Ctd-Post,DisplayName',
            Description: '$Ctd-Post,Description',
            Icon: 'File',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Post', 'Comment', 'Like', 'Folder'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'JournalId',
            displayName: 'Journal Id',
            description: 'Id of the corresponding journal item. 0 if the post is not derived from a journalitem.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'PostType',
            displayName: 'Post type',
            description: 'Type of post item ie. Manual, Created, Modified, etc.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'SharedContent',
            displayName: 'Shared Content',
            description: 'The shared Content if it has been attached to the post.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'PostDetails',
            displayName: 'Post details',
            description: 'Contains details of journal posts.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.PostCTD = PostCTD;
    function SliderItemCTD() {
        let options = {
            DisplayName: '$Ctd-SliderItem,SliderItem-DisplayName',
            Description: '$Ctd-SliderItem,SliderItem-Description',
            Icon: 'Image',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Image', 'Video'],
            name: 'Background',
            displayName: 'Background',
            description: 'Choose a photo or video as the background of your Slider Item',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'YouTubeBackground',
            displayName: 'YouTube video link',
            description: 'If you would like to specify a YouTube video as the background for you Slider Item, please paste its link here. Note, that in order for the YouTube video to serve as the background, you will need to leave the Background field empty',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'top', Text: 'Top', Enabled: true, Selected: false },
                { Value: 'middle', Text: 'Middle', Enabled: true, Selected: false },
                { Value: 'bottom', Text: 'Bottom', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'VerticalAlignment',
            displayName: 'Vertical alignment',
            description: 'Align text vertically',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'left', Text: 'Left', Enabled: true, Selected: false },
                { Value: 'center', Text: 'Center', Enabled: true, Selected: false },
                { Value: 'right', Text: 'Right', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'HorizontalAlignment',
            displayName: 'Horzontal alignment',
            description: 'Align text horizontally',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.HyperLinkFieldSetting({
            name: 'OuterCallToActionButton',
            displayName: 'Call-to-action external link',
            description: 'Set the behavior of the button',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'InnerCallToActionButton',
            displayName: 'Call-to-action internal link',
            description: 'Set the behavior of the button',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:ButtonList'
        }));
        return schema;
    }
    Schemas.SliderItemCTD = SliderItemCTD;
    function SurveyItemCTD() {
        let options = {
            DisplayName: '$Ctd-SurveyItem,DisplayName',
            Description: '$Ctd-SurveyItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'EvaluatedBy',
            displayName: 'Evaluated by',
            description: 'The user who has evaluated the survey.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'EvaluatedAt',
            displayName: 'Evaluated at',
            description: 'The date and time of the evaluation.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Evaluation',
            displayName: 'Evaluation',
            description: 'The evaluation text of the survey.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SurveyItemCTD = SurveyItemCTD;
    function SurveyListItemCTD() {
        let options = {
            DisplayName: '$Ctd-SurveyListItem,DisplayName',
            Description: '$Ctd-SurveyListItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.SurveyListItemCTD = SurveyListItemCTD;
    function TaskCTD() {
        let options = {
            DisplayName: '$Ctd-Task,DisplayName',
            Description: '$Ctd-Task,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'StartDate',
            displayName: 'Start date',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'DueDate',
            displayName: 'Due date',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS', '/Root'],
            name: 'AssignedTo',
            displayName: 'Assigned to',
            description: 'List of internal stakeholders.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '1', Text: 'Urgent', Enabled: true, Selected: false },
                { Value: '2', Text: 'Normal', Enabled: true, Selected: true },
                { Value: '3', Text: 'Not urgent', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Priority',
            displayName: 'Priority',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'pending', Text: 'Pending', Enabled: true, Selected: false },
                { Value: 'active', Text: 'Active', Enabled: true, Selected: true },
                { Value: 'completed', Text: 'Completed', Enabled: true, Selected: false },
                { Value: 'deferred', Text: 'Deferred', Enabled: true, Selected: false },
                { Value: 'waiting', Text: 'Waiting', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Status',
            displayName: 'Status',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            minValue: 0,
            maxValue: 100,
            showAsPercentage: true,
            name: 'TaskCompletion',
            displayName: 'Completion',
            description: 'Completion percentage of the task.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'RemainingDays',
            displayName: 'Remaining days',
            description: 'Number of remaining days.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'DueText',
            displayName: 'DueText',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'DueCssClass',
            displayName: 'Due style',
            description: 'Css class',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.TaskCTD = TaskCTD;
    function ApprovalWorkflowTaskCTD() {
        let options = {
            DisplayName: '$Ctd-ApprovalWorkflowTask,DisplayName',
            Description: '$Ctd-ApprovalWorkflowTask,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Comment',
            displayName: 'Comment',
            description: 'Type the reason for your decision here.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'yes', Text: 'Approved', Enabled: true, Selected: false },
                { Value: 'no', Text: 'Rejected', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Result',
            displayName: 'Answer',
            description: 'Select your answer here.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ContentToApprove',
            displayName: 'Content to approve',
            description: 'Ctd-ApprovalWorkflowTasken-USContentToApprove-Descriptione',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ApprovalWorkflowTaskCTD = ApprovalWorkflowTaskCTD;
    function ExpenseClaimWorkflowTaskCTD() {
        let options = {
            DisplayName: '$Ctd-ExpenseClaimWorkflowTask,DisplayName',
            Description: '$Ctd-ExpenseClaimWorkflowTask,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Reason',
            displayName: 'Reject reason',
            description: 'The reason why the Expense Claim was rejected.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ExpenseClaim',
            displayName: 'Expense Claim',
            description: 'The expense claim list.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'Sum',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ExpenseClaimWorkflowTaskCTD = ExpenseClaimWorkflowTaskCTD;
    function VotingItemCTD() {
        let options = {
            DisplayName: '$Ctd-VotingItem,DisplayName',
            Description: '$Ctd-VotingItem,Description',
            Icon: 'FormItem',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.VotingItemCTD = VotingItemCTD;
    function WebContentCTD() {
        let options = {
            DisplayName: '$Ctd-WebContent,DisplayName',
            Description: '$Ctd-WebContent,Description',
            Icon: 'WebContent',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ReviewDate',
            displayName: 'Review date',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'ArchiveDate',
            displayName: 'Archive date',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WebContentCTD = WebContentCTD;
    function ArticleCTD() {
        let options = {
            DisplayName: '$Ctd-Article,DisplayName',
            Description: '$Ctd-Article,Description',
            Icon: 'WebContent',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Subtitle',
            displayName: 'Subtitle',
            description: 'A secondary headline. Displayed in the article pages.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Lead',
            displayName: 'Lead',
            description: 'Short lead of article.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Body',
            displayName: 'Body',
            description: 'Body.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Pinned',
            displayName: 'Highlights',
            description: 'Content is always showing on the main page\'s [Highlights] collection.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Keywords',
            displayName: 'Keywords',
            description: 'Keywords',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Author',
            displayName: 'Author',
            description: 'Author',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ImageRef',
            displayName: 'Cover image (reference)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            name: 'ImageData',
            displayName: 'Cover image (binarydata)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Image',
            displayName: 'Cover image (composite)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:Image'
        }));
        return schema;
    }
    Schemas.ArticleCTD = ArticleCTD;
    function HTMLContentCTD() {
        let options = {
            DisplayName: '$Ctd-HTMLContent,DisplayName',
            Description: '$Ctd-HTMLContent,Description',
            Icon: 'WebContent',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'HTMLFragment',
            displayName: 'HTML fragment',
            description: 'Write your HTML code in the text area.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.HTMLContentCTD = HTMLContentCTD;
    function WebContentDemoCTD() {
        let options = {
            DisplayName: '$Ctd-WebContentDemo,DisplayName',
            Description: '$Ctd-WebContentDemo,Description',
            Icon: 'WebContent',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Subtitle',
            displayName: 'Subtitle',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'RelatedImage',
            displayName: 'Related Image',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Header',
            displayName: 'Header',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Body',
            displayName: 'Body',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RichText'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.HyperLinkFieldSetting({
            name: 'Details',
            displayName: 'Details',
            description: 'Details page link.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: true,
            allowMultiple: false,
            options: [
                { Value: 'English', Text: 'English', Enabled: true, Selected: true }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Language',
            displayName: 'Language',
            description: 'Choose a language.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Keywords',
            displayName: 'Keywords',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Author',
            displayName: 'Author',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WebContentDemoCTD = WebContentDemoCTD;
    function NotificationConfigCTD() {
        let options = {
            DisplayName: '$Ctd-NotificationConfig,DisplayName',
            Description: '$Ctd-NotificationConfig,Description',
            Icon: 'Content',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Subject',
            displayName: 'Subject',
            description: 'Subject of the email to be sent as notification. Provided "{FieldName}" entities will be replaced with referenced Field values of the content triggering notification.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Body',
            displayName: 'Body',
            description: 'Body of the email to be sent as notification. Provided "{FieldName}" entities will be replaced with referenced Field values of the content triggering notification.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SenderAddress',
            displayName: 'Address of sender',
            description: 'Email address of the sender of the email to be sent as notification.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.NotificationConfigCTD = NotificationConfigCTD;
    function PublicRegistrationConfigCTD() {
        let options = {
            DisplayName: '$Ctd-PublicRegistrationConfig,DisplayName',
            Description: '$Ctd-PublicRegistrationConfig,Description',
            Icon: 'PubReg',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['Group'],
            name: 'SecurityGroups',
            displayName: 'Security groups',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['Domain'],
            name: 'DefaultDomainPath',
            displayName: 'Default domain path',
            description: 'Default domain path where the registered user is created.',
            icon: 'DefaultDomainPath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserTypeName',
            displayName: 'Specific contenttype name',
            description: 'Contentype name of the user type, which is inherited from the User contenttype.',
            icon: 'UserTypeName',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'DuplicateErrorMessage',
            displayName: 'Duplicate error message',
            description: 'This text is displayed to the end user, when he or she tries to give a username which is in use.',
            icon: 'DuplicateErrorMessage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsBodyHtml',
            displayName: 'Use html in mail messages.',
            description: 'This setting tells that, the email which is sent by the PublicRegistration portlet is configured to use html in the mail body.',
            icon: 'IsBodyHtml',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ActivationEnabled',
            displayName: 'Use activation',
            description: 'Turn on/off activation process. If it is turned off, the PublicRegistration portlet will not send an activation email with activation link.',
            icon: 'ActivationEnabled',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ActivationEmailTemplate',
            displayName: 'Activation email body template',
            description: 'The text of the body of the activation email which will be sent to the user. The \'{0}\' formatting setting will hold the constructed activation link.',
            icon: 'ActivationEmailTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ActivationSuccessTemplate',
            displayName: 'Activation successful text',
            description: 'This text will be diplayed, after the end user activation process is successfull.',
            icon: 'ActivationSuccessTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'AlreadyActivatedMessage',
            displayName: 'Already Activated Message',
            description: 'This text is displayed to the end user, when the user is alredy activated.',
            icon: 'AlreadyActivatedMessage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'MailSubjectTemplate',
            displayName: 'Activation email subject template',
            description: 'Subject text of the activation email will be sent to the end user.',
            icon: 'MailSubjectTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'MailFrom',
            displayName: 'Mail From',
            description: '',
            icon: 'MailFrom',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'AdminEmailAddress',
            displayName: 'Admin Email Address',
            description: 'List of email addresses of the administrators',
            icon: 'AdminEmailAddress',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'RegistrationSuccessTemplate',
            displayName: 'Registration successfull text',
            description: 'This text is displayed to the end user, when the registration process is successful.',
            icon: 'RegistrationSuccessTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ResetPasswordTemplate',
            displayName: 'Reset password mail body',
            description: 'This text is sent to the end user via email during resetting password.',
            icon: 'ResetPasswordTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ResetPasswordSubjectTemplate',
            displayName: 'Reset password subject template',
            description: 'The subject text of the email which is sent to the end user during resetting password.',
            icon: 'ResetPasswordSubjectTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ResetPasswordSuccessfulTemplate',
            displayName: 'Reset Password Successful Template ',
            description: 'This text is displayed to the end user, when his/her password reset was succesful.',
            icon: 'ResetPasswordSuccessfulTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ChangePasswordUserInterfacePath',
            displayName: 'Change password user interface path',
            description: 'Repository path of the user interface (user control) which is displayen, when the user wants to change his/her password.',
            icon: 'ChangePasswordUserInterfacePath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ChangePasswordSuccessfulMessage',
            displayName: 'ChangePasswordSuccessfulMessage',
            description: 'This text is displayed to the end user, his/her password change was succesful.',
            icon: 'ChangePasswordSuccessfulMessage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ForgottenPasswordUserInterfacePath',
            displayName: 'Reset password user interface path.',
            description: 'Repository path of the user interface (usercontrol) which will be displayed, when the user forgets his/her password.',
            icon: 'ForgottenPasswordUserInterfacePath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'NewRegistrationContentView',
            displayName: 'Create new registration contentview',
            description: 'Repository path of the new contentview. If it\'s not set, the default InlineNew is used.',
            icon: 'NewRegistrationContentView',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'EditProfileContentView',
            displayName: 'Edit profile contentview path',
            description: 'Repository path of the edit profile contentview (if it is not given, the default InlineEdit is used).',
            icon: 'EditProfileContentView',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AutoGeneratePassword',
            displayName: 'Auto generate password',
            description: 'NOT WORKING!',
            icon: 'AutoGeneratePassword',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'DisableCreatedUser',
            displayName: 'Disable created user',
            description: '',
            icon: 'DisableCreatedUser',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsUniqueEmail',
            displayName: 'Unique email',
            description: '',
            icon: 'UniqueEmail',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AutomaticLogon',
            displayName: 'Automatic logon',
            description: '',
            icon: 'AutomaticLogon',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            name: 'ChangePasswordPagePath',
            displayName: 'Change password page path',
            description: 'Repository path of the page that contains the public registration protlet with Registration mode.',
            icon: 'ChangePasswordPagePath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ChangePasswordRestrictedText',
            displayName: 'ChangePasswordRestrictedText',
            description: 'This text is displayed when a user tries to view the "change password" page and he/she is not logged in, OR the user has changed his/her password but is still trying to reset the password with the link sent by email.',
            icon: 'ChangePasswordRestrictedText',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'AlreadyRegisteredUserMessage',
            displayName: 'Already Registered User Message',
            description: 'This text is displayed to the end user, when a user is alredy registered with the given username.',
            icon: 'AlreadyRegisteredUserMessage',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'UpdateProfileSuccessTemplate',
            displayName: 'UpdateProfileSuccessTemplate',
            description: 'This text is displayed to the end user, when his/her profile update was succesfull.',
            icon: 'UpdateProfileSuccessTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'EmailNotValid',
            displayName: 'Email Not Valid',
            description: 'This text is displayed to the end user, when the given email address is not valid.',
            icon: 'EmailNotValid',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'NoEmailGiven',
            displayName: 'No Email Given',
            description: 'This text is displayed to the end user, when email address is not given.',
            icon: 'NoEmailGiven',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ActivateByAdmin',
            displayName: 'Activate by admin',
            description: 'If set, the user registration will be approved by admin.',
            icon: 'ActivateByAdmin',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ActivateEmailSubject',
            displayName: 'Activate Email Subject',
            description: 'Subject of the activation email.',
            icon: 'ActivateEmailSubject',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ActivateEmailTemplate',
            displayName: 'Activate Email Template',
            description: 'Template of the activation email.',
            icon: 'ActivateEmailTemplate',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['User'],
            name: 'ActivateAdmins',
            displayName: 'Activate admins',
            description: 'The list of administrators who can approve request of registrations.',
            icon: 'ActivateAdminList',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.PublicRegistrationConfigCTD = PublicRegistrationConfigCTD;
    function QueryCTD() {
        let options = {
            DisplayName: '$Ctd-Query,DisplayName',
            Description: '$Ctd-Query,Description',
            Icon: 'Query',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'Query',
            displayName: 'Query',
            description: 'Query text.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:QueryBuilder'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'Public', Text: 'Public', Enabled: true, Selected: true },
                { Value: 'Private', Text: 'Private', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.RadioButtons,
            enumTypeName: '',
            name: 'QueryType',
            displayName: 'Query type',
            description: 'Public queries are stored under the workspace, private queries are stored under the user profile.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.QueryCTD = QueryCTD;
    function SubscriptionCTD() {
        let options = {
            DisplayName: '$Ctd-Subscription,DisplayName',
            Description: '$Ctd-Subscription,Description',
            Icon: 'Content',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ContentPath',
            displayName: 'ContentPath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserPath',
            displayName: 'UserPath',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserEmail',
            displayName: 'Notification address',
            description: 'Notification emails will be sent to this address.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NumberFieldSetting({
            name: 'UserId',
            displayName: 'UserId',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserName',
            displayName: 'UserName',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'IsActive',
            displayName: 'Active notification',
            description: 'Defines whether the portal sends notification emails or not.',
            readOnly: false,
            compulsory: false,
            defaultValue: 'true',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Immediately', Enabled: true, Selected: true },
                { Value: '1', Text: 'Daily', Enabled: true, Selected: false },
                { Value: '2', Text: 'Weekly', Enabled: true, Selected: false },
                { Value: '3', Text: 'Monthly', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Frequency',
            displayName: 'Frequency',
            description: '\            Defines the frequency of the notification<br />\            <br /><i>Immediately:</i> immediate email when a content changes.\            <br /><i>Daily:</i> one email per day with the summary of changes.\            <br /><i>Weekly:</i> one email per week with the summary of changes.\            <br /><i>Monthly:</i>  one email per month with the summary of changes.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:RadioButtonGroup'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'en', Text: 'English', Enabled: true, Selected: true },
                { Value: 'hu', Text: 'Hungarian', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Language',
            displayName: 'Language',
            description: 'Defines the language of the notification.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.SubscriptionCTD = SubscriptionCTD;
    function TagCTD() {
        let options = {
            DisplayName: '$Ctd-Tag,DisplayName',
            Description: '$Ctd-Tag,Description',
            Icon: 'Content',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Description2',
            displayName: 'Description',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'BlackListPath',
            displayName: 'Blacklist path',
            description: 'List of paths where tag blacklisted is.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.TagCTD = TagCTD;
    function UserCTD() {
        let options = {
            DisplayName: '$Ctd-User,DisplayName',
            Description: '$Ctd-User,Description',
            Icon: 'User',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: ['Image'],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            maxLength: 100,
            name: 'LoginName',
            displayName: 'Login name',
            description: 'The name that the user has to type in on login forms (in some cases along with the domain name). It has to be unique under a domain.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'JobTitle',
            displayName: 'Job title',
            description: '',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Enabled',
            displayName: 'Enabled',
            description: 'User account is enabled.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Domain',
            displayName: 'Domain',
            description: 'The domain of the user.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$',
            name: 'Email',
            displayName: 'E-mail',
            description: 'The e-mail of the user.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '[^<]+',
            name: 'FullName',
            displayName: 'Full name',
            description: 'Full name of the user (e.g. John Smith).',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            name: 'ImageRef',
            displayName: 'Cover image (reference)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.BinaryFieldSetting({
            name: 'ImageData',
            displayName: 'Cover image (binarydata)',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Avatar',
            displayName: 'Avatar',
            description: 'Avatar image of user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:Image'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.PasswordFieldSetting({
            reenterTitle: 'Re-enter password',
            reenterDescription: 'Re-enter password.',
            passwordHistoryLength: 0,
            name: 'Password',
            displayName: 'Password',
            description: 'User password.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SyncGuid',
            displayName: 'SyncGuid',
            description: 'GUID of corresponding AD object.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.DateAndTime,
            name: 'LastSync',
            displayName: 'LastSync',
            description: 'Date of last synchronization.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.CaptchaFieldSetting({
            name: 'Captcha',
            displayName: 'Captcha text',
            description: 'Captcha text entered by the user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'Manager',
            displayName: 'Manager',
            description: 'Manager of the user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Department',
            displayName: 'Department',
            description: 'Department of employee.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Languages',
            displayName: 'Languages',
            description: 'Spoken languages.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '(^\\d*([-\\s\\+\\(\\)]\\d*)*$)?',
            name: 'Phone',
            displayName: 'Phone',
            description: 'Phone number. (e.g. +123456789 or 1234).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '...', Text: '...', Enabled: true, Selected: false },
                { Value: 'Female', Text: 'Female', Enabled: true, Selected: false },
                { Value: 'Male', Text: 'Male', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Gender',
            displayName: 'Gender',
            description: 'Select one.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '...', Text: '...', Enabled: true, Selected: false },
                { Value: 'Single', Text: 'Single', Enabled: true, Selected: false },
                { Value: 'Married', Text: 'Married', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'MaritalStatus',
            displayName: 'Marital status',
            description: 'Select one.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.DateTimeFieldSetting({
            dateTimeMode: FieldSettings_1.FieldSettings.DateTimeMode.Date,
            name: 'BirthDate',
            displayName: 'Birth date',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            textType: FieldSettings_1.FieldSettings.TextType.LongText,
            name: 'Education',
            displayName: 'Education',
            description: 'List of educations - e.g. high school, university.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0,
            controlHint: 'sn:EducationEditor'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'TwitterAccount',
            displayName: 'Twitter account',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'FacebookURL',
            displayName: 'Facebook URL',
            description: 'http://www.facebook.com/USERNAME.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'LinkedInURL',
            displayName: 'LinkedIn URL',
            description: 'http://www.linkedin.com/USERNAME.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'en', Text: 'English', Enabled: true, Selected: true },
                { Value: 'hu', Text: 'Hungarian', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'Language',
            displayName: 'Selected language',
            description: 'Language used to display texts on the site, if it is available.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['Workspace', 'DocumentWorkspace', 'ProjectWorkspace', 'SalesWorkspace'],
            name: 'FollowedWorkspaces',
            displayName: 'Followed workspaces',
            description: 'List of workspaces followed by the user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ProfilePath',
            displayName: 'Profile path',
            description: 'Path of the user\'s personal workspace.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.UserCTD = UserCTD;
    function RegisteredUserCTD() {
        let options = {
            DisplayName: '$Ctd-RegisteredUser,DisplayName',
            Description: '$Ctd-RegisteredUser,Description',
            Icon: 'RegisteredUser',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ResetKey',
            displayName: 'Reset key',
            description: 'Reset key guid used by the reset password link.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ActivationId',
            displayName: 'Activation',
            description: 'Activation guid used by the registered user activation links.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'Activated',
            displayName: 'Activated',
            description: 'User is activated by the activation email. (or you can activate user by enabling this option).',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SecurityQuestion',
            displayName: 'Question',
            description: 'Password recovery information entered by the user.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SecurityAnswer',
            displayName: 'Answer',
            description: 'Password recovery answer to the end user\'s question.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.RegisteredUserCTD = RegisteredUserCTD;
    function UserSearchCTD() {
        let options = {
            DisplayName: '$Ctd-UserSearch,DisplayName',
            Description: '$Ctd-UserSearch,Description',
            Icon: 'User',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'Search',
            displayName: 'Search',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.UserSearchCTD = UserSearchCTD;
    function WikiArticleCTD() {
        let options = {
            DisplayName: '$Ctd-WikiArticle,DisplayName',
            Description: '$Ctd-WikiArticle,Description',
            Icon: 'WikiArticle',
            AllowIndexing: true,
            AllowIncrementalNaming: false,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'WikiArticleText',
            displayName: 'Wiki article text',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0,
            controlHint: 'sn:WikiEditor'
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'ReferencedWikiTitles',
            displayName: 'Referenced wiki titles',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WikiArticleCTD = WikiArticleCTD;
    function WorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-Workflow,DisplayName',
            Description: '$Ctd-Workflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'WorkflowDefinitionVersion',
            displayName: 'Workflow definition version',
            description: 'Stores the version for a running workflow instance.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'WorkflowInstanceGuid',
            displayName: 'Workflow instance GUID',
            description: 'Stores the instance GUID for a running workflow instance.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'WorkflowTypeName',
            displayName: 'Workflow type name',
            description: 'Name of the workflow definition this is an instance of.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'WorkflowHostType',
            displayName: 'Workflow host type string',
            description: 'The host type identifier string for resuming this workflow instance.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'WorkflowStarted',
            displayName: 'Workflow started',
            description: 'False for pre-run and template workflow instances.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: '0', Text: 'Created', Enabled: true, Selected: false },
                { Value: '1', Text: 'Running', Enabled: true, Selected: false },
                { Value: '2', Text: 'Aborted', Enabled: true, Selected: false },
                { Value: '3', Text: 'Completed', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: 'SenseNet.Workflow.WorkflowStatusEnum',
            name: 'WorkflowStatus',
            displayName: 'Workflow status',
            description: 'The status of the .NET workflow represented by this content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AllowManualStart',
            displayName: 'Allow manual start',
            description: 'Check to allow this workflow to be started manually.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AutostartOnPublished',
            displayName: 'Autostart on Published',
            description: 'Check to allow this workflow to start automatically when a content is published in the list.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AutostartOnCreated',
            displayName: 'Autostart on Created',
            description: 'Check to allow this workflow to start automatically when a content is created in the list.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AutostartOnChanged',
            displayName: 'Autostart on Changed',
            description: 'Check to allow this workflow to start automatically when a content is changed in the list.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'ContentWorkflow',
            displayName: 'Content workflow',
            description: 'True for workflow types that are related to one content (e.g. approval or printing). Related content must be an existing content.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'AbortOnRelatedContentChange',
            displayName: 'Abort on related content change',
            description: 'If set to true workflow will be automatically aborted whenever the Related Content changes.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['GenericContent'],
            name: 'RelatedContent',
            displayName: 'Related content',
            description: 'The content that is related to the workflow. Only used in content workflows.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.LongTextFieldSetting({
            name: 'SystemMessages',
            displayName: 'System messages',
            description: 'Messages from the workflow system. E.g. aborting / terminating reason.',
            readOnly: true,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'OwnerSiteUrl',
            displayName: 'Owner site url',
            description: 'The url of site where the workflow was created on.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Hide,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.WorkflowCTD = WorkflowCTD;
    function ApprovalWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-ApprovalWorkflow,DisplayName',
            Description: '$Ctd-ApprovalWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'FirstLevelApprover',
            displayName: 'First level approver',
            description: 'The user who need to approve the selected content.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'FirstLevelTimeFrame',
            displayName: 'First level approve time frame',
            description: 'Time frame that first level approver has for approving the content (timespan format: \'[d.]hh:mm:ss\', or a single number - e.g. \'3\' - for days).',
            readOnly: false,
            compulsory: true,
            defaultValue: '3',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: true,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'SecondLevelApprover',
            displayName: 'Second level approvers',
            description: 'Users who can approve the selected content if first level approvers did not approve it in the given time frame.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'SecondLevelTimeFrame',
            displayName: 'Second level approve time frame',
            description: 'Time frame that second level approvers have for approving the content (timespan format: \'[d.]hh:mm:ss\', or a single number - e.g. \'3\' - for days).',
            readOnly: false,
            compulsory: false,
            defaultValue: '5',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.NullFieldSetting({
            name: 'WaitForAll',
            displayName: 'Wait for all',
            description: 'If this option is set to true, all second level approvers should approve the content. If false, one approver is enough.',
            readOnly: false,
            compulsory: false,
            defaultValue: '1',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Advanced,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ApprovalWorkflowCTD = ApprovalWorkflowCTD;
    function DocumentPreviewWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-DocumentPreviewWorkflow,DisplayName',
            Description: '$Ctd-DocumentPreviewWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'StartIndex',
            displayName: 'Start index',
            description: '0-based index of the page where the workflow starts generating preview images. The number of images comes from settings.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'ContentVersion',
            displayName: 'Content version',
            description: 'The exact version number (e.g. V2.3.P) of the content that the preview images should be generated for.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.DocumentPreviewWorkflowCTD = DocumentPreviewWorkflowCTD;
    function ExpenseClaimWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-ExpenseClaimWorkflow,DisplayName',
            Description: '$Ctd-ExpenseClaimWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ReferenceFieldSetting({
            allowMultiple: false,
            allowedTypes: ['User'],
            selectionRoots: ['/Root/IMS'],
            name: 'CEO',
            displayName: 'CEO',
            description: 'The CEO of the department.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.IntegerFieldSetting({
            name: 'BudgetLimit',
            displayName: 'Budget Limit',
            description: 'Set a limit for your money that you are able to spend.',
            readOnly: false,
            compulsory: true,
            defaultValue: '1000',
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'FinanceEmail',
            displayName: 'Finance e-mail',
            description: 'The e-mail address of a member of the finance who will receive a message of the approved expense claim.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ExpenseClaimWorkflowCTD = ExpenseClaimWorkflowCTD;
    function ForgottenPasswordWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-ForgottenPasswordWorkflow,DisplayName',
            Description: '$Ctd-ForgottenPasswordWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,4}$',
            name: 'EmailForPassword',
            displayName: 'Email address',
            description: 'Please provide your email address here. If a user exists with that address, we will send you a confimation email with a link for resetting your password.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.ForgottenPasswordWorkflowCTD = ForgottenPasswordWorkflowCTD;
    function MailProcessorWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-MailProcessorWorkflow,DisplayName',
            Description: '$Ctd-MailProcessorWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        return schema;
    }
    Schemas.MailProcessorWorkflowCTD = MailProcessorWorkflowCTD;
    function RegistrationWorkflowCTD() {
        let options = {
            DisplayName: '$Ctd-RegistrationWorkflow,DisplayName',
            Description: '$Ctd-RegistrationWorkflow,Description',
            Icon: 'workflow',
            AllowIndexing: true,
            AllowIncrementalNaming: true,
            AllowedChildTypes: [],
            FieldSettings: []
        };
        let schema = new Schema(options);
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'FullName',
            displayName: 'Full name',
            description: 'Please enter your full name here.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'UserName',
            displayName: 'User name',
            description: 'Please enter the username you would like.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            regex: '^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,4}$',
            name: 'Email',
            displayName: 'E-mail',
            description: 'Type your e-mail address here.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ShortTextFieldSetting({
            name: 'InitialPassword',
            displayName: 'Initial password',
            description: 'Please enter the password you would like.',
            readOnly: false,
            compulsory: true,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        schema.FieldSettings.push(new FieldSettings_1.FieldSettings.ChoiceFieldSetting({
            allowExtraValue: false,
            allowMultiple: false,
            options: [
                { Value: 'client', Text: 'Prospective enterprise client', Enabled: true, Selected: false },
                { Value: 'media', Text: 'Technical journalist or media worker', Enabled: true, Selected: false },
                { Value: 'community', Text: 'Open source developer or advocate', Enabled: true, Selected: false },
                { Value: 'public', Text: 'None of the above', Enabled: true, Selected: false }
            ],
            displayChoice: FieldSettings_1.FieldSettings.DisplayChoice.DropDown,
            enumTypeName: '',
            name: 'RegistrationType',
            displayName: 'Registration type',
            description: 'Please select which one of the following describes you best.',
            readOnly: false,
            compulsory: false,
            visibleBrowse: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleEdit: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            visibleNew: FieldSettings_1.FieldSettings.FieldVisibility.Show,
            defaultOrder: 0
        }));
        return schema;
    }
    Schemas.RegistrationWorkflowCTD = RegistrationWorkflowCTD;
})(Schemas = exports.Schemas || (exports.Schemas = {}));

//# sourceMappingURL=Schema.js.map
