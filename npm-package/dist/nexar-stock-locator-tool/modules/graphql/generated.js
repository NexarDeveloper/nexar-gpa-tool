import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export var ApplyPolicy;
(function (ApplyPolicy) {
    ApplyPolicy["AfterResolver"] = "AFTER_RESOLVER";
    ApplyPolicy["BeforeResolver"] = "BEFORE_RESOLVER";
})(ApplyPolicy || (ApplyPolicy = {}));
export var DatBomAnalysisLevel;
(function (DatBomAnalysisLevel) {
    DatBomAnalysisLevel["Error"] = "ERROR";
    DatBomAnalysisLevel["Suggestion"] = "SUGGESTION";
    DatBomAnalysisLevel["Warning"] = "WARNING";
})(DatBomAnalysisLevel || (DatBomAnalysisLevel = {}));
export var DatBomAnalysisResultLevel;
(function (DatBomAnalysisResultLevel) {
    DatBomAnalysisResultLevel["Error"] = "ERROR";
    DatBomAnalysisResultLevel["Suggestion"] = "SUGGESTION";
    DatBomAnalysisResultLevel["Warning"] = "WARNING";
})(DatBomAnalysisResultLevel || (DatBomAnalysisResultLevel = {}));
export var DatBomPartSearchStrategy;
(function (DatBomPartSearchStrategy) {
    DatBomPartSearchStrategy["Exact"] = "EXACT";
    DatBomPartSearchStrategy["Fuzzy"] = "FUZZY";
    DatBomPartSearchStrategy["Partial"] = "PARTIAL";
})(DatBomPartSearchStrategy || (DatBomPartSearchStrategy = {}));
/** Possible states of an SCR processing run. */
export var DatScrJobState;
(function (DatScrJobState) {
    /** Job has completed successfully. */
    DatScrJobState["Completed"] = "COMPLETED";
    /** The job has failed to process the data. */
    DatScrJobState["Failed"] = "FAILED";
    /** The job is still processing the data. */
    DatScrJobState["Running"] = "RUNNING";
    /** Job is in an unknown state. */
    DatScrJobState["Unknown"] = "UNKNOWN";
})(DatScrJobState || (DatScrJobState = {}));
export var DesContentTypeKind;
(function (DesContentTypeKind) {
    DesContentTypeKind["BinaryFile"] = "BINARY_FILE";
    DesContentTypeKind["BmsAutoGeneratedComponents"] = "BMS_AUTO_GENERATED_COMPONENTS";
    DesContentTypeKind["BomTemplate"] = "BOM_TEMPLATE";
    DesContentTypeKind["Component"] = "COMPONENT";
    DesContentTypeKind["ComponentTemplate"] = "COMPONENT_TEMPLATE";
    DesContentTypeKind["DataClass"] = "DATA_CLASS";
    DesContentTypeKind["DataSheet"] = "DATA_SHEET";
    DesContentTypeKind["DeviceClass"] = "DEVICE_CLASS";
    DesContentTypeKind["DraftsmanDocumentTemplate"] = "DRAFTSMAN_DOCUMENT_TEMPLATE";
    DesContentTypeKind["DraftsmanSheetTemplate"] = "DRAFTSMAN_SHEET_TEMPLATE";
    DesContentTypeKind["DxpAddon"] = "DXP_ADDON";
    DesContentTypeKind["DxpPlatform"] = "DXP_PLATFORM";
    DesContentTypeKind["DxpPlugin"] = "DXP_PLUGIN";
    DesContentTypeKind["DxpSdk"] = "DXP_SDK";
    DesContentTypeKind["EmbeddedDesign"] = "EMBEDDED_DESIGN";
    DesContentTypeKind["FpgaDesign"] = "FPGA_DESIGN";
    DesContentTypeKind["LayerStack"] = "LAYER_STACK";
    DesContentTypeKind["Model3D"] = "MODEL3D";
    DesContentTypeKind["MorfikPackage"] = "MORFIK_PACKAGE";
    DesContentTypeKind["MorfikWebResource"] = "MORFIK_WEB_RESOURCE";
    DesContentTypeKind["MorfikXAppDesign"] = "MORFIK_X_APP_DESIGN";
    DesContentTypeKind["MorfikXAppImage"] = "MORFIK_X_APP_IMAGE";
    DesContentTypeKind["MorfikXAppSet"] = "MORFIK_X_APP_SET";
    DesContentTypeKind["OpenBus"] = "OPEN_BUS";
    DesContentTypeKind["OutputJob"] = "OUTPUT_JOB";
    DesContentTypeKind["PartChoiceList"] = "PART_CHOICE_LIST";
    DesContentTypeKind["PcbAssembly"] = "PCB_ASSEMBLY";
    DesContentTypeKind["PcbBlank"] = "PCB_BLANK";
    DesContentTypeKind["PcbBlock"] = "PCB_BLOCK";
    DesContentTypeKind["PcbComponent"] = "PCB_COMPONENT";
    DesContentTypeKind["PcbDesign"] = "PCB_DESIGN";
    DesContentTypeKind["PcbDocument"] = "PCB_DOCUMENT";
    DesContentTypeKind["PcbModel3D"] = "PCB_MODEL3D";
    DesContentTypeKind["PlmInstance"] = "PLM_INSTANCE";
    DesContentTypeKind["PlmPublishTemplate"] = "PLM_PUBLISH_TEMPLATE";
    DesContentTypeKind["Preferences"] = "PREFERENCES";
    DesContentTypeKind["Project"] = "PROJECT";
    DesContentTypeKind["ProjectReviewPackage"] = "PROJECT_REVIEW_PACKAGE";
    DesContentTypeKind["ProjectTemplate"] = "PROJECT_TEMPLATE";
    DesContentTypeKind["RichText"] = "RICH_TEXT";
    DesContentTypeKind["SchematicSheet"] = "SCHEMATIC_SHEET";
    DesContentTypeKind["SchematicTemplate"] = "SCHEMATIC_TEMPLATE";
    DesContentTypeKind["Script"] = "SCRIPT";
    DesContentTypeKind["SimulationModel"] = "SIMULATION_MODEL";
    DesContentTypeKind["SiModel"] = "SI_MODEL";
    DesContentTypeKind["Symbol"] = "SYMBOL";
    DesContentTypeKind["WebItem"] = "WEB_ITEM";
})(DesContentTypeKind || (DesContentTypeKind = {}));
export var DesJobStatus;
(function (DesJobStatus) {
    DesJobStatus["Done"] = "DONE";
    DesJobStatus["Error"] = "ERROR";
    DesJobStatus["Pending"] = "PENDING";
    DesJobStatus["Processing"] = "PROCESSING";
})(DesJobStatus || (DesJobStatus = {}));
export var DesLayerType;
(function (DesLayerType) {
    DesLayerType["Abstract"] = "ABSTRACT";
    DesLayerType["Adhesive"] = "ADHESIVE";
    DesLayerType["BikiniCoverlay"] = "BIKINI_COVERLAY";
    DesLayerType["Conductive"] = "CONDUCTIVE";
    DesLayerType["Core"] = "CORE";
    DesLayerType["Dielectric"] = "DIELECTRIC";
    DesLayerType["Foil"] = "FOIL";
    DesLayerType["Mechanical"] = "MECHANICAL";
    DesLayerType["Misc"] = "MISC";
    DesLayerType["NonConductive"] = "NON_CONDUCTIVE";
    DesLayerType["Overlay"] = "OVERLAY";
    DesLayerType["PasteMask"] = "PASTE_MASK";
    DesLayerType["PeLayer"] = "PE_LAYER";
    DesLayerType["Physical"] = "PHYSICAL";
    DesLayerType["Plane"] = "PLANE";
    DesLayerType["Plating"] = "PLATING";
    DesLayerType["Prepreg"] = "PREPREG";
    DesLayerType["Signal"] = "SIGNAL";
    DesLayerType["SolderMask"] = "SOLDER_MASK";
    DesLayerType["Stiffener"] = "STIFFENER";
    DesLayerType["SurfaceFinish"] = "SURFACE_FINISH";
    DesLayerType["Unknown"] = "UNKNOWN";
})(DesLayerType || (DesLayerType = {}));
export var DesPadType;
(function (DesPadType) {
    DesPadType["Free"] = "FREE";
    DesPadType["Smd"] = "SMD";
})(DesPadType || (DesPadType = {}));
export var DesParameterType;
(function (DesParameterType) {
    DesParameterType["Capacitance"] = "CAPACITANCE";
    DesParameterType["Charge"] = "CHARGE";
    DesParameterType["Conductance"] = "CONDUCTANCE";
    DesParameterType["Current"] = "CURRENT";
    DesParameterType["Decibels"] = "DECIBELS";
    DesParameterType["Frequency"] = "FREQUENCY";
    DesParameterType["Impedance"] = "IMPEDANCE";
    DesParameterType["Inductance"] = "INDUCTANCE";
    DesParameterType["Length"] = "LENGTH";
    DesParameterType["Mass"] = "MASS";
    DesParameterType["None"] = "NONE";
    DesParameterType["Percent"] = "PERCENT";
    DesParameterType["Power"] = "POWER";
    DesParameterType["Resistance"] = "RESISTANCE";
    DesParameterType["Temperature"] = "TEMPERATURE";
    DesParameterType["Text"] = "TEXT";
    DesParameterType["Time"] = "TIME";
    DesParameterType["Voltage"] = "VOLTAGE";
})(DesParameterType || (DesParameterType = {}));
export var DesPinElectricalType;
(function (DesPinElectricalType) {
    DesPinElectricalType["HiZ"] = "HI_Z";
    DesPinElectricalType["Input"] = "INPUT";
    DesPinElectricalType["Io"] = "IO";
    DesPinElectricalType["OpenCollector"] = "OPEN_COLLECTOR";
    DesPinElectricalType["OpenEmitter"] = "OPEN_EMITTER";
    DesPinElectricalType["Output"] = "OUTPUT";
    DesPinElectricalType["Passive"] = "PASSIVE";
    DesPinElectricalType["Power"] = "POWER";
})(DesPinElectricalType || (DesPinElectricalType = {}));
export var DesPrimitiveShape;
(function (DesPrimitiveShape) {
    DesPrimitiveShape["Rectangle"] = "RECTANGLE";
    DesPrimitiveShape["Round"] = "ROUND";
    DesPrimitiveShape["RoundedRectangle"] = "ROUNDED_RECTANGLE";
})(DesPrimitiveShape || (DesPrimitiveShape = {}));
export var DesTaskPriority;
(function (DesTaskPriority) {
    DesTaskPriority["High"] = "HIGH";
    DesTaskPriority["Highest"] = "HIGHEST";
    DesTaskPriority["Low"] = "LOW";
    DesTaskPriority["Medium"] = "MEDIUM";
    DesTaskPriority["Undefined"] = "UNDEFINED";
})(DesTaskPriority || (DesTaskPriority = {}));
export var DesTaskStatus;
(function (DesTaskStatus) {
    DesTaskStatus["InProgress"] = "IN_PROGRESS";
    DesTaskStatus["Resolved"] = "RESOLVED";
    DesTaskStatus["ToDo"] = "TO_DO";
    DesTaskStatus["Undefined"] = "UNDEFINED";
})(DesTaskStatus || (DesTaskStatus = {}));
export var DesUserPictureSize;
(function (DesUserPictureSize) {
    DesUserPictureSize["Original"] = "ORIGINAL";
    DesUserPictureSize["Size48X48"] = "SIZE48X48";
    DesUserPictureSize["Size70X70"] = "SIZE70X70";
    DesUserPictureSize["Size128X128"] = "SIZE128X128";
})(DesUserPictureSize || (DesUserPictureSize = {}));
export var ManAccess;
(function (ManAccess) {
    ManAccess["AllowMpn"] = "ALLOW_MPN";
    ManAccess["IsCreator"] = "IS_CREATOR";
    ManAccess["IsEms"] = "IS_EMS";
})(ManAccess || (ManAccess = {}));
export var ManCurrency;
(function (ManCurrency) {
    ManCurrency["Usd"] = "USD";
})(ManCurrency || (ManCurrency = {}));
export var ManLayerType;
(function (ManLayerType) {
    ManLayerType["Core"] = "CORE";
    ManLayerType["Coverlay"] = "COVERLAY";
    ManLayerType["Overlay"] = "OVERLAY";
    ManLayerType["Plane"] = "PLANE";
    ManLayerType["PrePreg"] = "PRE_PREG";
    ManLayerType["Signal"] = "SIGNAL";
    ManLayerType["SolderMask"] = "SOLDER_MASK";
    ManLayerType["SurfaceFinish"] = "SURFACE_FINISH";
})(ManLayerType || (ManLayerType = {}));
export var ManMountingType;
(function (ManMountingType) {
    ManMountingType["SurfaceMount"] = "SURFACE_MOUNT";
    ManMountingType["ThroughHole"] = "THROUGH_HOLE";
})(ManMountingType || (ManMountingType = {}));
export var ManOrderEventType;
(function (ManOrderEventType) {
    ManOrderEventType["Accepted"] = "ACCEPTED";
    ManOrderEventType["Batched"] = "BATCHED";
    ManOrderEventType["Cancel"] = "CANCEL";
    ManOrderEventType["ConsignmentDetails"] = "CONSIGNMENT_DETAILS";
    ManOrderEventType["Created"] = "CREATED";
    ManOrderEventType["EmsAccepted"] = "EMS_ACCEPTED";
    ManOrderEventType["Paid"] = "PAID";
    ManOrderEventType["PartsOrdered"] = "PARTS_ORDERED";
    ManOrderEventType["PartsReceived"] = "PARTS_RECEIVED";
    ManOrderEventType["PcbsOrdered"] = "PCBS_ORDERED";
    ManOrderEventType["PcbsReceived"] = "PCBS_RECEIVED";
    ManOrderEventType["ProcessStart"] = "PROCESS_START";
    ManOrderEventType["Received"] = "RECEIVED";
    ManOrderEventType["Reviewed"] = "REVIEWED";
    ManOrderEventType["Shipped"] = "SHIPPED";
    ManOrderEventType["TimeEstimation"] = "TIME_ESTIMATION";
})(ManOrderEventType || (ManOrderEventType = {}));
export var ManOrderStatus;
(function (ManOrderStatus) {
    ManOrderStatus["Cancelled"] = "CANCELLED";
    ManOrderStatus["Complete"] = "COMPLETE";
    ManOrderStatus["Manufacturing"] = "MANUFACTURING";
    ManOrderStatus["PaymentProcessing"] = "PAYMENT_PROCESSING";
    ManOrderStatus["Placed"] = "PLACED";
    ManOrderStatus["Processing"] = "PROCESSING";
    ManOrderStatus["Quoting"] = "QUOTING";
    ManOrderStatus["Shipping"] = "SHIPPING";
})(ManOrderStatus || (ManOrderStatus = {}));
export var ManPartIssue;
(function (ManPartIssue) {
    ManPartIssue["BadLifecycle"] = "BAD_LIFECYCLE";
    ManPartIssue["InsufficientStock"] = "INSUFFICIENT_STOCK";
    ManPartIssue["NotFound"] = "NOT_FOUND";
    ManPartIssue["NoSelection"] = "NO_SELECTION";
    ManPartIssue["StockLow"] = "STOCK_LOW";
    ManPartIssue["Unavailable"] = "UNAVAILABLE";
})(ManPartIssue || (ManPartIssue = {}));
export var ManPartStatus;
(function (ManPartStatus) {
    ManPartStatus["Good"] = "GOOD";
    ManPartStatus["Issue"] = "ISSUE";
    ManPartStatus["Warn"] = "WARN";
})(ManPartStatus || (ManPartStatus = {}));
export var ManPathType;
(function (ManPathType) {
    ManPathType["Arc"] = "ARC";
    ManPathType["Vertex"] = "VERTEX";
})(ManPathType || (ManPathType = {}));
export var ManPaymentMethod;
(function (ManPaymentMethod) {
    ManPaymentMethod["CreditCard"] = "CREDIT_CARD";
    ManPaymentMethod["DirectApproval"] = "DIRECT_APPROVAL";
})(ManPaymentMethod || (ManPaymentMethod = {}));
export var ManQuoteCategory;
(function (ManQuoteCategory) {
    ManQuoteCategory["Assembly"] = "ASSEMBLY";
    ManQuoteCategory["Bom"] = "BOM";
    ManQuoteCategory["Fabrication"] = "FABRICATION";
    ManQuoteCategory["Nre"] = "NRE";
    ManQuoteCategory["Shipping"] = "SHIPPING";
})(ManQuoteCategory || (ManQuoteCategory = {}));
export var ManShippingCarrier;
(function (ManShippingCarrier) {
    ManShippingCarrier["Ups"] = "UPS";
    ManShippingCarrier["Usps"] = "USPS";
})(ManShippingCarrier || (ManShippingCarrier = {}));
export var ManSide;
(function (ManSide) {
    ManSide["Bottom"] = "BOTTOM";
    ManSide["Top"] = "TOP";
})(ManSide || (ManSide = {}));
export var ManSilkScreenColour;
(function (ManSilkScreenColour) {
    ManSilkScreenColour["Black"] = "BLACK";
    ManSilkScreenColour["Blue"] = "BLUE";
    ManSilkScreenColour["Green"] = "GREEN";
    ManSilkScreenColour["Red"] = "RED";
    ManSilkScreenColour["White"] = "WHITE";
    ManSilkScreenColour["Yellow"] = "YELLOW";
})(ManSilkScreenColour || (ManSilkScreenColour = {}));
export var ManSolderMaskColour;
(function (ManSolderMaskColour) {
    ManSolderMaskColour["Black"] = "BLACK";
    ManSolderMaskColour["Blue"] = "BLUE";
    ManSolderMaskColour["DarkBrown"] = "DARK_BROWN";
    ManSolderMaskColour["Green"] = "GREEN";
    ManSolderMaskColour["LightGreen"] = "LIGHT_GREEN";
    ManSolderMaskColour["MatteBlack"] = "MATTE_BLACK";
    ManSolderMaskColour["MatteGreen"] = "MATTE_GREEN";
    ManSolderMaskColour["Red"] = "RED";
    ManSolderMaskColour["Transparent"] = "TRANSPARENT";
    ManSolderMaskColour["White"] = "WHITE";
    ManSolderMaskColour["Yellow"] = "YELLOW";
})(ManSolderMaskColour || (ManSolderMaskColour = {}));
export var ManSourcing;
(function (ManSourcing) {
    ManSourcing["Altimade"] = "ALTIMADE";
    ManSourcing["Consign"] = "CONSIGN";
    ManSourcing["Dnp"] = "DNP";
})(ManSourcing || (ManSourcing = {}));
export var ManViolationType;
(function (ManViolationType) {
    ManViolationType["Inconsistent"] = "INCONSISTENT";
    ManViolationType["TooBig"] = "TOO_BIG";
    ManViolationType["TooSmall"] = "TOO_SMALL";
    ManViolationType["Unknown"] = "UNKNOWN";
    ManViolationType["Unsupported"] = "UNSUPPORTED";
})(ManViolationType || (ManViolationType = {}));
export var SupNexarFeatureId;
(function (SupNexarFeatureId) {
    SupNexarFeatureId["CadModels"] = "CAD_MODELS";
    SupNexarFeatureId["Datasheets"] = "DATASHEETS";
    SupNexarFeatureId["InventoryHistory"] = "INVENTORY_HISTORY";
    SupNexarFeatureId["LeadTime"] = "LEAD_TIME";
    SupNexarFeatureId["Lifecycle"] = "LIFECYCLE";
    SupNexarFeatureId["SimilarParts"] = "SIMILAR_PARTS";
    SupNexarFeatureId["SpellingCorrections"] = "SPELLING_CORRECTIONS";
    SupNexarFeatureId["Suggestions"] = "SUGGESTIONS";
    SupNexarFeatureId["TechSpecs"] = "TECH_SPECS";
})(SupNexarFeatureId || (SupNexarFeatureId = {}));
export var SupPartLifeCycle;
(function (SupPartLifeCycle) {
    SupPartLifeCycle["Active"] = "ACTIVE";
    SupPartLifeCycle["ActiveUnconfirmed"] = "ACTIVE_UNCONFIRMED";
    SupPartLifeCycle["ContactMfr"] = "CONTACT_MFR";
    SupPartLifeCycle["Discontinued"] = "DISCONTINUED";
    SupPartLifeCycle["DiscontinuedUnconfirmed"] = "DISCONTINUED_UNCONFIRMED";
    SupPartLifeCycle["Eol"] = "EOL";
    SupPartLifeCycle["New"] = "NEW";
    SupPartLifeCycle["Nrfnd"] = "NRFND";
    SupPartLifeCycle["Transferred"] = "TRANSFERRED";
    SupPartLifeCycle["Unknown"] = "UNKNOWN";
})(SupPartLifeCycle || (SupPartLifeCycle = {}));
export var SupPlanTier;
(function (SupPlanTier) {
    SupPlanTier["Basic"] = "BASIC";
    SupPlanTier["Enterprise"] = "ENTERPRISE";
    SupPlanTier["Free"] = "FREE";
    SupPlanTier["Pro"] = "PRO";
})(SupPlanTier || (SupPlanTier = {}));
export var SupRole;
(function (SupRole) {
    SupRole["Cadmodels"] = "CADMODELS";
    SupRole["Distributor"] = "DISTRIBUTOR";
    SupRole["Internal"] = "INTERNAL";
    SupRole["Nexarinternal"] = "NEXARINTERNAL";
})(SupRole || (SupRole = {}));
export var SupSortDirection;
(function (SupSortDirection) {
    SupSortDirection["Asc"] = "asc";
    SupSortDirection["Desc"] = "desc";
})(SupSortDirection || (SupSortDirection = {}));
export const MpnSearchDocument = gql `
    query mpnSearch($q: String, $country: String!, $currency: String!, $start: Int, $limit: Int, $sortDir: SupSortDirection, $inStockOnly: Boolean, $filters: Map, $distributorApi: Boolean, $distributorApiTimeout: String!, $authorizedOnly: Boolean!) {
  supSearchMpn(
    q: $q
    country: $country
    currency: $currency
    start: $start
    limit: $limit
    sortDir: $sortDir
    inStockOnly: $inStockOnly
    filters: $filters
    distributorApi: $distributorApi
    distributorApiTimeout: $distributorApiTimeout
  ) {
    hits
    appliedFilters {
      shortname
      name
      values
      displayValues
    }
    results {
      _cacheId
      akaMpn
      description
      part {
        _cacheId
        bestDatasheet {
          url
        }
        bestImage {
          url
        }
        category {
          id
        }
        descriptions {
          text
        }
        freeSampleUrl
        id
        manufacturer {
          id
          isVerified
          name
        }
        manufacturerUrl
        medianPrice1000 {
          _cacheId
          convertedCurrency
          convertedPrice
        }
        mpn
        sellers(authorizedOnly: $authorizedOnly) {
          _cacheId
          company {
            homepageUrl
            id
            isDistributorApi
            isVerified
            name
            slug
          }
          isAuthorized
          isBroker
          isRfq
          offers {
            _cacheId
            clickUrl
            id
            inventoryLevel
            moq
            packaging
            prices {
              _cacheId
              conversionRate
              convertedCurrency
              convertedPrice
              currency
              price
              quantity
            }
            sku
            updated
          }
        }
        series {
          id
          name
          url
        }
        slug
        v3uid
      }
    }
  }
}
    `;
/**
 * __useMpnSearchQuery__
 *
 * To run a query within a React component, call `useMpnSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMpnSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMpnSearchQuery({
 *   variables: {
 *      q: // value for 'q'
 *      country: // value for 'country'
 *      currency: // value for 'currency'
 *      start: // value for 'start'
 *      limit: // value for 'limit'
 *      sortDir: // value for 'sortDir'
 *      inStockOnly: // value for 'inStockOnly'
 *      filters: // value for 'filters'
 *      distributorApi: // value for 'distributorApi'
 *      distributorApiTimeout: // value for 'distributorApiTimeout'
 *      authorizedOnly: // value for 'authorizedOnly'
 *   },
 * });
 */
export function useMpnSearchQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(MpnSearchDocument, options);
}
export function useMpnSearchLazyQuery(baseOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(MpnSearchDocument, options);
}