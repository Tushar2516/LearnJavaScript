class SearchView {
    _parentElement = document.querySelector('.search');

    //  Get User Input From UI
    getQuery(){

        const query =  this._parentElement.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    //  Clear Search Input
    _clearInput(){
        this._parentElement.querySelector('.search__field').value='';
    }

    //  Event Handler
    addHandlerSearch(handler){
       this._parentElement.addEventListener('submit', function(e){
        e.preventDefault();
        handler()
       })
    }

}
export default new SearchView()