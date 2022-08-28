import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <p>メールアドレス（必須）</p>
          {/* inputタグを追加 */}
          <input />
          
          <p>お問い合わせ内容（必須）</p>
          {/* textareaタグを追加 */}
          <textarea />
          
          {/* 送信ボタンを追加 */}
          <input
          type='submit'
          value='送信'
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
