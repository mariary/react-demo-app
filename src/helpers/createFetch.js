import isEmpty from 'lodash/isEmpty'

export const fetchRequestWrapper = ({
  url,
  fetchOptions = {},
  onSuccess,
  onError = error => console.log(error)
}) => async (dispatch) => {
  try {
    const response = await fetch(url, isEmpty(fetchOptions) ? undefined : fetchOptions)
    const parsedResponse = await response.json()

    dispatch(onSuccess(parsedResponse))
  } catch (error) {
    onError(error)
  }
}
