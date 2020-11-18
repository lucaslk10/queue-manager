const httpClient = require('axios');

module.exports = {
  key: 'UrlData',
  async handle({ data }) {
    /** Set currently job as 'processing' by calling 'job/process' route */
    const params = { id: data._id };
    await httpClient.get(process.env.API_URL_PROCESS, { params });

    const result = { _id: data._id, http_code: null, status: null };

    try {
     /** Process URL then stores the status */
      const content = await httpClient.get(data.url);

      result.http_code = content.status || 500;
      result.status = result.http_code >= 300 ? 'ERROR' : 'DONE';
    } catch (error) {
      /** Handling for URL timeout */
      result.http_code = 500;
      result.status = 'ERROR';
    }

    /** Set currently job processing results by calling 'job/finalize' route */
    await httpClient.post(process.env.API_URL_FINALIZE, result);
  },
};
