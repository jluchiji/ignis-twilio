/**
 * client/index.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */

import _           from 'lodash';
import Url         from 'url';
import Twilio      from 'twilio';

/*!
 * Initializer function
 */
export function init(key = 'twilio') {

  /* Create the namespace and the vanilla client */
  const client = this.twilio = { };
  const config = client.config = this.config(key);
  client.__native = Twilio(config.sid, config.token);

  /* Find out what is the server's hostname and setup callback root URI */
  const root = Url.parse(this.config('env.HOSTNAME'));
  if (config.auth) {
    root.auth = `${config.auth.username}:${config.auth.password}`;
  }
  client.root = Url.format(root);

  /* Import twilio functions */

}


/*!
 * Ignis extension
 */
export default function(Ignis, key) {
  Ignis.init(_.partial(init, key));
}
