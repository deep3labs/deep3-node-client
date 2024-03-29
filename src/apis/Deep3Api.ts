/* tslint:disable */
/* eslint-disable */
/**
 * Deep3 Labs API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ChainsResponseInner,
  DeepShieldFrResponse,
  DeepShieldHftResponse,
  HodlC1Response,
  HodlC1XTokenRequest,
  HodlC1XTokenResponse,
  HodlC1XTokensRequest,
  HodlC1XTokensResponseInner,
  ModelsResponseInner,
  PredictionResponse,
  StakeSageCResponse,
  StakeSageHResponse,
  StakeSageLResponse,
} from '../models';
import {
    ChainsResponseInnerFromJSON,
    ChainsResponseInnerToJSON,
    DeepShieldFrResponseFromJSON,
    DeepShieldFrResponseToJSON,
    DeepShieldHftResponseFromJSON,
    DeepShieldHftResponseToJSON,
    HodlC1ResponseFromJSON,
    HodlC1ResponseToJSON,
    HodlC1XTokenRequestFromJSON,
    HodlC1XTokenRequestToJSON,
    HodlC1XTokenResponseFromJSON,
    HodlC1XTokenResponseToJSON,
    HodlC1XTokensRequestFromJSON,
    HodlC1XTokensRequestToJSON,
    HodlC1XTokensResponseInnerFromJSON,
    HodlC1XTokensResponseInnerToJSON,
    ModelsResponseInnerFromJSON,
    ModelsResponseInnerToJSON,
    PredictionResponseFromJSON,
    PredictionResponseToJSON,
    StakeSageCResponseFromJSON,
    StakeSageCResponseToJSON,
    StakeSageHResponseFromJSON,
    StakeSageHResponseToJSON,
    StakeSageLResponseFromJSON,
    StakeSageLResponseToJSON,
} from '../models';

export interface GetDeepShieldFrPredictionRequest {
    chainId: number;
    address: string;
}

export interface GetDeepShieldHftPredictionRequest {
    chainId: number;
    address: string;
}

export interface GetHodlC1PredictionRequest {
    chainId: number;
    address: string;
}

export interface GetHodlC1XTokenPredictionRequest {
    hodlC1XTokenRequest: HodlC1XTokenRequest;
}

export interface GetHodlC1XTokenPredictionsRequest {
    hodlC1XTokensRequest: HodlC1XTokensRequest;
}

export interface GetPredictionRequest {
    model: string;
    chainId: number;
    publicAddress: string;
}

export interface GetStakeSageCPredictionRequest {
    chainId: number;
    address: string;
}

export interface GetStakeSageHPredictionRequest {
    chainId: number;
    address: string;
}

export interface GetStakeSageLPredictionRequest {
    chainId: number;
    address: string;
}

/**
 * 
 */
export class Deep3Api extends runtime.BaseAPI {

    /**
     * Will return currently supported chains
     * Get currently supported chains and the active machine learning models
     */
    async getChainsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ChainsResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/chains`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ChainsResponseInnerFromJSON));
    }

    /**
     * Will return currently supported chains
     * Get currently supported chains and the active machine learning models
     */
    async getChains(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ChainsResponseInner>> {
        const response = await this.getChainsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a DeepShield-FR prediction
     */
    async getDeepShieldFrPredictionRaw(requestParameters: GetDeepShieldFrPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeepShieldFrResponse>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getDeepShieldFrPrediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getDeepShieldFrPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/deepshield-fr/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeepShieldFrResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a DeepShield-FR prediction
     */
    async getDeepShieldFrPrediction(requestParameters: GetDeepShieldFrPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeepShieldFrResponse> {
        const response = await this.getDeepShieldFrPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a DeepShield-HFT prediction
     */
    async getDeepShieldHftPredictionRaw(requestParameters: GetDeepShieldHftPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeepShieldHftResponse>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getDeepShieldHftPrediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getDeepShieldHftPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/deepshield-hft/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeepShieldHftResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a DeepShield-HFT prediction
     */
    async getDeepShieldHftPrediction(requestParameters: GetDeepShieldHftPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeepShieldHftResponse> {
        const response = await this.getDeepShieldHftPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a HODL-C1 prediction
     */
    async getHodlC1PredictionRaw(requestParameters: GetHodlC1PredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HodlC1Response>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getHodlC1Prediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getHodlC1Prediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/hodl-c1/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HodlC1ResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a HODL-C1 prediction
     */
    async getHodlC1Prediction(requestParameters: GetHodlC1PredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HodlC1Response> {
        const response = await this.getHodlC1PredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a HODL-C1 cross-chain token prediction
     */
    async getHodlC1XTokenPredictionRaw(requestParameters: GetHodlC1XTokenPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HodlC1XTokenResponse>> {
        if (requestParameters.hodlC1XTokenRequest === null || requestParameters.hodlC1XTokenRequest === undefined) {
            throw new runtime.RequiredError('hodlC1XTokenRequest','Required parameter requestParameters.hodlC1XTokenRequest was null or undefined when calling getHodlC1XTokenPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/hodl-c1/x/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HodlC1XTokenRequestToJSON(requestParameters.hodlC1XTokenRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HodlC1XTokenResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a HODL-C1 cross-chain token prediction
     */
    async getHodlC1XTokenPrediction(requestParameters: GetHodlC1XTokenPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HodlC1XTokenResponse> {
        const response = await this.getHodlC1XTokenPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the predictions
     * Get HODL-C1 cross-chain token predictions
     */
    async getHodlC1XTokenPredictionsRaw(requestParameters: GetHodlC1XTokenPredictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HodlC1XTokensResponseInner>>> {
        if (requestParameters.hodlC1XTokensRequest === null || requestParameters.hodlC1XTokensRequest === undefined) {
            throw new runtime.RequiredError('hodlC1XTokensRequest','Required parameter requestParameters.hodlC1XTokensRequest was null or undefined when calling getHodlC1XTokenPredictions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/hodl-c1/x/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: HodlC1XTokensRequestToJSON(requestParameters.hodlC1XTokensRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HodlC1XTokensResponseInnerFromJSON));
    }

    /**
     * Will return the predictions
     * Get HODL-C1 cross-chain token predictions
     */
    async getHodlC1XTokenPredictions(requestParameters: GetHodlC1XTokenPredictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HodlC1XTokensResponseInner>> {
        const response = await this.getHodlC1XTokenPredictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return active machine learning models
     * Get active machine learning models and the chains they support
     */
    async getModelsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelsResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelsResponseInnerFromJSON));
    }

    /**
     * Will return active machine learning models
     * Get active machine learning models and the chains they support
     */
    async getModels(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelsResponseInner>> {
        const response = await this.getModelsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a prediction
     */
    async getPredictionRaw(requestParameters: GetPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PredictionResponse>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling getPrediction.');
        }

        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getPrediction.');
        }

        if (requestParameters.publicAddress === null || requestParameters.publicAddress === undefined) {
            throw new runtime.RequiredError('publicAddress','Required parameter requestParameters.publicAddress was null or undefined when calling getPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/prediction/{model}/{chainId}/{publicAddress}`.replace(`{${"model"}}`, encodeURIComponent(String(requestParameters.model))).replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"publicAddress"}}`, encodeURIComponent(String(requestParameters.publicAddress))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PredictionResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a prediction
     */
    async getPrediction(requestParameters: GetPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PredictionResponse> {
        const response = await this.getPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a StakeSage-C prediction
     */
    async getStakeSageCPredictionRaw(requestParameters: GetStakeSageCPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakeSageCResponse>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getStakeSageCPrediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getStakeSageCPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stakesage-c/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StakeSageCResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a StakeSage-C prediction
     */
    async getStakeSageCPrediction(requestParameters: GetStakeSageCPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakeSageCResponse> {
        const response = await this.getStakeSageCPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a StakeSage-H prediction
     */
    async getStakeSageHPredictionRaw(requestParameters: GetStakeSageHPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakeSageHResponse>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getStakeSageHPrediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getStakeSageHPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stakesage-h/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StakeSageHResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a StakeSage-H prediction
     */
    async getStakeSageHPrediction(requestParameters: GetStakeSageHPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakeSageHResponse> {
        const response = await this.getStakeSageHPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Will return the prediction
     * Get a StakeSage-L prediction
     */
    async getStakeSageLPredictionRaw(requestParameters: GetStakeSageLPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakeSageLResponse>> {
        if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
            throw new runtime.RequiredError('chainId','Required parameter requestParameters.chainId was null or undefined when calling getStakeSageLPrediction.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getStakeSageLPrediction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/stakesage-l/chain/{chainId}/account/{address}`.replace(`{${"chainId"}}`, encodeURIComponent(String(requestParameters.chainId))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StakeSageLResponseFromJSON(jsonValue));
    }

    /**
     * Will return the prediction
     * Get a StakeSage-L prediction
     */
    async getStakeSageLPrediction(requestParameters: GetStakeSageLPredictionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakeSageLResponse> {
        const response = await this.getStakeSageLPredictionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
