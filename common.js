Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
      window.event = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
          }
      };
      document.body.addEventListener('click', window.event);
  },
  unbind: function (el) {
      document.body.removeEventListener('click', window.event);
  },
});

Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el) {
    // Переключаем фокус на элемент
    el.focus();
  }
});

  var App = new Vue ({
    el: '#app',
    data: {
      textInput: '',
      focused: false,
      isActive: false,
      isFilled: false,
      inputValue: 'xxx',
      folders: [
        {item: 'Горшечные'},
        {item: 'Декор'},
        {item: 'Игрушки'},
        {item: 'Полиграфия'},
        {item: 'Сладости'},
        {item: 'Упаковка'},
        {item: 'Услуги'},
        {item: 'Цветы'},
        {item: 'Лилии'},
        {item: 'Азиатские'},
        {item: 'Американские'},
        {item: 'Белоснежные'},
        {item: 'Восточные'},
        {item: 'Длинноцветковые'},
        {item: 'Кудреватые'},
        {item: 'Орлеанские'},
        {item: 'Орхидеи'},
        {item: 'Пионы'},
        {item: 'Анемоновидные'},
        {item: 'Корончатые'},
        {item: 'Махровые полушаровидные'},
        {item: 'Немахровые'},
        {item: 'Полумахровы'},
        {item: 'Розовидные'},
        {item: 'Японские'},
        {item: 'Розы'},
        {item: 'Грандифлора'},
        {item: 'Миниатюрные'},
        {item: 'Патио'},
        {item: 'Плетистые'},
        {item: 'Полиантовые'},
        {item: 'Ругоза'},
        {item: 'Флорибунда'},
        {item: 'Чайно-гибридные'},
        {item: 'Шрабы'},
        {item: 'Хризантемы'},
      ]
    },

    created: function() {
      console.log('created');
    },
    mounted: function() {
      console.log('mounted');
    },
    watch: {
      textInput: function(){
        if (this.textInput.length > 0){
          this.isFilled = true;

        } else {
          this.isFilled = false;
        }
        console.log(this.textInput);
      },
    },
    methods: {
      onFocus() {
        this.focused = true;
        console.log('onFocus()');
        this.isActive = true;
      },
      onBlur() {
        //this.focused = false;
        //this.isActive = false;
      },
      onItemClick(folderItem) {
        this.textInput = folderItem;
        this.isActive = false;
        this.isFilled = true;
        console.log('onItemClick');
      },
      onBodyClick() {
        console.log('onBodyClick');
      },
      closeAutocomplete() {
        this.isActive = false;
        console.log('onItemClickOut');
      },
      clearTextInput() {
        this.textInput = '';
        this.isFilled = false;
      },
      onInputChange() {
        // if (this.textInput.length > 0){
        //   this.isFilled = true;
        //
        // } else {
        //   this.isFilled = false;
        // }
        console.log('onInputChange');
      },
    },
    computed: {
      filterItems: function() {
        return this.folders.filter((folder) => {
          return folder.item.toLowerCase().match(this.textInput.toLowerCase());
        });
      }
    }
  });
