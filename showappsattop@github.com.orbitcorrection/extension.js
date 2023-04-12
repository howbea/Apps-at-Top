/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

const Main = imports.ui.main;

let viewappgrid = Main.overview.dash._showAppsIcon;

class Extension {
    constructor() {
    }

    enable() {
	Main.overview.dash._dashContainer.remove_child(viewappgrid);
	Main.overview.dash._dashContainer.insert_child_at_index(viewappgrid,0);
    }

    disable() {
	Main.overview.dash._dashContainer.remove_child(viewappgrid);
	Main.overview.dash._dashContainer.add_child(viewappgrid);
    }
}

function init() {
    return new Extension();
}
