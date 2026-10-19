/* @ts-self-types="./amped_web.d.ts" */

/**
 * Minimal WebGL2 viewer for GetAmped shapes/primitives.
 */
export class Viewer {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ViewerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_viewer_free(ptr, 0);
    }
    /**
     * Add a `.shp`/`.prm`. `skin` is an optional `.tex`/`.body`/`.face` used for
     * surfaces that carry no texture of their own. A shape's parts follow skeleton slots by
     * index; `slot` puts a single `.prm` into one slot (face = 1, head = 14).
     * @param {Uint8Array} shape
     * @param {Uint8Array | null} [skin]
     * @param {number | null} [slot]
     */
    add(shape, skin, slot) {
        const ptr0 = passArray8ToWasm0(shape, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(skin) ? 0 : passArray8ToWasm0(skin, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add(this.__wbg_ptr, ptr0, len0, ptr1, len1, isLikeNone(slot) ? Number.MAX_SAFE_INTEGER : (slot) >>> 0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * A `/player/action/*.poa` (what holding an item turns a player into) by its path.
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    add_action(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_action(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Register an `/attack/*.aoa` (what PlayerData.Attack.attackmodel names). Kept across maps.
     * @param {string} name
     * @param {Uint8Array} bytes
     */
    add_attack_data(name, bytes) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_attack_data(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * PlayerForm.boneshape: the body's `bone.shp` (its own textures), drawn instead of the look
     * while setBone(true).
     * @param {Uint8Array} shp
     */
    add_bone(shp) {
        const ptr0 = passArray8ToWasm0(shp, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_bone(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Register a `/player/common/*.sc` script (fallback table for the player's scripts).
     * @param {string} name
     * @param {Uint8Array} bytes
     */
    add_common_script(name, bytes) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_common_script(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Register a `/player/dekachara/*.sc` script (PlayerUtil.getDekaScripts: a dekachara's — or
     * a "DEKA" PlayerData's — table in front of the common one).
     * @param {string} name
     * @param {Uint8Array} bytes
     */
    add_deka_script(name, bytes) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_deka_script(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * An `/effect/*.oa` by path, for makeShapeModel (its scripts: start.sc, or the one a
     * makeShapeModel / makeShapeModel2 names — psy.oa's y.sc · ma.sc · x.sc).
     * @param {string} path
     * @param {Uint8Array} oa
     */
    add_effect_model(path, oa) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(oa, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_effect_model(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * A standalone `.shp` a script names by path (setShape("/effect/jet.shp"),
     * shockbone.oa's "/player/body/1/bone.shp"): ResourceManager.getObject, by that path.
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    add_effect_shape(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_effect_shape(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * A standalone `.tex` by path ("/effect/hit/hit.tex", "/effect/zanzou1.tex", "/effect/shadow.tex"):
     * what setBillBoard · makeSpectrum with a path name.
     * @param {string} name
     * @param {Uint8Array} bytes
     */
    add_effect_texture(name, bytes) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_effect_texture(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * PlayerBody.setBodyShape's other hands: `rchop.prm` / `rpoint.prm` (right, slot 0) and
     * `lchop.prm` / `lpoint.prm` (left, slot 7), skinned with the body texture; kind 1 chop, 2 point.
     * @param {Uint8Array} prm
     * @param {Uint8Array} body
     * @param {boolean} left
     * @param {number} kind
     */
    add_hand(prm, body, left, kind) {
        const ptr0 = passArray8ToWasm0(prm, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_hand(this.__wbg_ptr, ptr0, len0, ptr1, len1, left, kind);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * `/effect/hit/<n>.oa` (its start.sc runs where an attack lands).
     * @param {number} n
     * @param {Uint8Array} oa
     */
    add_hit_effect(n, oa) {
        const ptr0 = passArray8ToWasm0(oa, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_hit_effect(this.__wbg_ptr, n, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * An `/item/*.ioa` by its resource path.
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    add_item(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_item(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * The view of MapData layer `i` (MapData.Layer.attach): its `.mpv`, or the `.md` itself when
     * the view is embedded in the layer. Drawn only while I'm in that layer (TestWorld.paint).
     * @param {number} i
     * @param {Uint8Array} bytes
     */
    add_map_layer(i, bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_map_layer(this.__wbg_ptr, i, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * The loaded map's sourceobjects' own resources (a woodbox's smoke.ptc), under
     * game::map_owner(source). The previous map's go first: only this map's objects run.
     * @param {Uint8Array} md
     */
    add_map_resources(md) {
        const ptr0 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_map_resources(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Style data and model for map character `i`, to spawn it now or when an event asks.
     * Special data with a model of its own (dragon, hissaturobo, gori) is drawn with that model and
     * its skeleton, not the look (PlayerView.setProperty -> setObjectData), as in changeStatus.
     * Its NPCData.taste OUTFIT, if that OutfitData is known (add_outfit before this), has its
     * PlayerData merged in (Player(world, NPCData): playerdata.merge(epd)).
     * @param {number} i
     * @param {Uint8Array} poa
     * @param {number} model
     */
    add_npc_template(i, poa, model) {
        const ptr0 = passArray8ToWasm0(poa, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_npc_template(this.__wbg_ptr, i, ptr0, len0, model);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * The shapes, textures and particles an ObjectData file keeps in its resources (explode1.oa's
     * baku_smallB.shp · hit.tex · p1.ptc), under `owner` (its path: "/effect/explode1.oa",
     * "/attack/biglaser.aoa") — what that ObjectData's scripts mean by a bare name.
     * @param {string} owner
     * @param {Uint8Array} bytes
     */
    add_object_resources(owner, bytes) {
        const ptr0 = passStringToWasm0(owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_object_resources(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * An outfit file (`/outfit/<name>.od`, data.OutfitData: PlayerEditPanel lists the folder
     * with ResourceManager.getList("/outfit") and keeps the `.od` files that are OutfitData).
     * Returns, one per line,
     * what it needs loaded: its parts' views (add_outfit_view) and its PlayerData (add_action).
     * @param {string} path
     * @param {Uint8Array} bytes
     * @returns {string}
     */
    add_outfit(path, bytes) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.viewer_add_outfit(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * An outfit part's view (OutfitView.addOutfit): an ObjectData (its view, and the scripts
     * startscript and outfitScript name), a Primitive or a Shape.
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    add_outfit_view(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_outfit_view(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * A `.ptc` by path (makeParticle with an absolute name).
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    add_particle(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_particle(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Deviation (not in the original): a map's `.md` for the edit screen's NPC choices
     * (`npc::Roster`). Call once per map before `menu_open`.
     * @param {string} path
     * @param {Uint8Array} md
     */
    add_roster_map(path, md) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_roster_map(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * A skeleton set by its resource path ("/player/anime/ryoute.srt").
     * @param {string} path
     * @param {Uint8Array} srt
     */
    add_structure(path, srt) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(srt, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_add_structure(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Everything is loaded: the round starts (WorldModel3D.init + startProcess).
     * @param {number} now
     */
    begin(now) {
        const ret = wasm.viewer_begin(this.__wbg_ptr, now);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Start a new character model; following `add` calls build it. Returns its id.
     * @returns {number}
     */
    begin_model() {
        const ret = wasm.viewer_begin_model(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * A new challenge tour: no total, nothing brought (the menu / a map picked directly).
     */
    challenge_reset() {
        wasm.viewer_challenge_reset(this.__wbg_ptr);
    }
    clear() {
        wasm.viewer_clear(this.__wbg_ptr);
    }
    /**
     * Config.Key.keyboard in force for the page's help, "name\tkey\thelp name" per button:
     * "jump\t118\tV", "attack1\t99\tC", "attack2\t120\tX", "aim\t122\tZ", "chat\t10\tENTER" by
     * default. The page saves the keys (the "keys" menu command) and passes them back with
     * `set_control_keys` on the next load (Config.saveConfig / conf/config).
     * @returns {string}
     */
    control_keys() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_control_keys(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Decode a `.sr`: [channels, rate, samples...] (interleaved).
     * @param {Uint8Array} bytes
     * @returns {Float32Array}
     */
    decode_sound(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_decode_sound(this.__wbg_ptr, ptr0, len0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * Dev: put the item at `path` (an `/item/*.ioa`) in my hands.
     * @param {string} path
     */
    dev_give(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_dev_give(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Dev aid: force my hands (PlayerForm.setHand(left, right) kinds; 9 hides them).
     * @param {number} right
     * @param {number} left
     */
    dev_hand(right, left) {
        wasm.viewer_dev_hand(this.__wbg_ptr, right, left);
    }
    /**
     * 개발용(원본에 없음): 내가 쥔 아이템의 HP(내구도)를 `hp` 로(0 ~ ItemData.hp 로 자름).
     * 게임 로직은 그대로라 다음 addHP(-n)(휘두르기 · 쏘기)에서 0 이 되면 원본 breakCommand 경로
     * (break.sc · itembroken.sc)로 부서진다. 바뀐 HP, 쥔 아이템이 없으면 -1.
     * @param {number} hp
     * @returns {number}
     */
    dev_item_hp(hp) {
        const ret = wasm.viewer_dev_item_hp(this.__wbg_ptr, hp);
        return ret;
    }
    /**
     * Dev aid: knock character `i` out along the original death path (`Player::dev_kill`:
     * HP −1 and die.sc); the death itself (rule and map events, the NPC's fade-out) follows
     * when die.sc calls die(), as for a killing blow. False if none.
     * @param {number} i
     * @returns {boolean}
     */
    dev_kill(i) {
        const ret = wasm.viewer_dev_kill(this.__wbg_ptr, i);
        return ret !== 0;
    }
    /**
     * Dev: move me to (x, y, z).
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    dev_place(x, y, z) {
        wasm.viewer_dev_place(this.__wbg_ptr, x, y, z);
    }
    /**
     * Dummy HP (for tests / the page); -2 without one.
     * @returns {number}
     */
    dummy_hp() {
        const ret = wasm.viewer_dummy_hp(this.__wbg_ptr);
        return ret;
    }
    /**
     * EpiloguePanel.Story, translated. The class file's strings lost some characters to '?'
     * at build time, so each matches the dictionary key that agrees everywhere else.
     * @returns {string}
     */
    epilogue_lines() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_epilogue_lines(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Player login: UserData.equipment, the item I come in holding.
     * @param {string} source
     */
    equip_me(source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_equip_me(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * GameSetting items one may bring (PlayerEditPanel's equipment row): "name\tshown name"
     * per line, for those whose .ioa is loaded.
     * @returns {string}
     */
    equipment_list() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_equipment_list(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Timeline length in frames (0 without a structure).
     * @returns {number}
     */
    frame_count() {
        const ret = wasm.viewer_frame_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Dev aid: loaded hit effects / textures, live effects.
     * @returns {string}
     */
    fx_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_fx_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Phase, clock, HP and messages for the page's HUD (JSON).
     * @returns {string}
     */
    hud() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_hud(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Dev aid: items in the arena (data name, map name, state, killed or broken, place, durability; killed items stay listed).
     * @returns {string}
     */
    items_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_items_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The buttons a key (KeyboardEvent code) presses in the battle, bit i = button i + 1
     * (1 jump, 2 attack 1, 4 attack 2, 8 aim, 16 chat): KeyboardGamePad's conversion of
     * Config.Key.keyboard. A key on two buttons presses both.
     * @param {string} code
     * @returns {number}
     */
    key_buttons(code) {
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_key_buttons(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * A `/component/...` texture for the 2D pass (gfx2d), by its resource path.
     * @param {string} path
     * @param {Uint8Array} bytes
     */
    load_ui_texture(path, bytes) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_load_ui_texture(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Dev aid: the controlled player's location.
     * @returns {Float32Array}
     */
    me_loc() {
        const ret = wasm.viewer_me_loc(this.__wbg_ptr);
        var v1 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * MenuPanel gone (the story, or a map, took the screen).
     */
    menu_close() {
        wasm.viewer_menu_close(this.__wbg_ptr);
    }
    /**
     * @returns {boolean}
     */
    menu_is_open() {
        const ret = wasm.viewer_menu_is_open(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * A key on the menus (the KeyboardEvent code): one command per line for the page
     * ("sound\tpath", "look\tdir\thead\tface\tbody\tequipment\toutfit", "save\t..." the same,
     * "start", "config\tturbo\tcredit\toutline\tshadow\treso\tfullscreen", "keys\tk1\t..\tk5"
     * (Config.Key.keyboard changed in the options: save it), "open\turl", "quit").
     * Keys go through Config.Key.keyboard in force (menu::logical_keys): button 1 (V by
     * default) decides, button 2 (C) cancels, the arrows move, Enter is also 2009 (TitlePanel
     * decides on it). A CONTROL row waiting for a key takes the key itself.
     * @param {string} code
     * @param {number} now
     * @returns {string}
     */
    menu_key(code, now) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.viewer_menu_key(this.__wbg_ptr, ptr0, len0, now);
            deferred2_0 = ret[0];
            deferred2_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * MenuPanel.start (TitlePanel). `parts`: per style folder "dir\theads\tfaces\tbodies" (names
     * joined by ','); `users`: the saved "dir\thead\tface\tbody\tequipment\toutfit" lines;
     * `config`: "turbo\tcredit\toutline\tshadow\treso\tfullscreen"; `current`: the style
     * played last (Game.currentstyle).
     * @param {string} parts
     * @param {string} users
     * @param {string} config
     * @param {string} current
     * @param {number} now
     */
    menu_open(parts, users, config, current, now) {
        const ptr0 = passStringToWasm0(parts, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(users, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(config, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(current, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.viewer_menu_open(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, now);
    }
    /**
     * The menu clock (ms) before a frame is drawn.
     * @param {number} now
     */
    menu_tick(now) {
        wasm.viewer_menu_tick(this.__wbg_ptr, now);
    }
    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        const ret = wasm.viewer_new(canvas);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        ViewerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * The map's characters, one line each: "playerdata\tbody\tface\thead" for an NPC (empty
     * playerdata = the player's own style and look), an empty line otherwise.
     * @returns {string}
     */
    npc_list() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_npc_list(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Deviation: the NPCs one may play, one per line:
     * "npc:<NPCData.name>\tname (translated)\tplayerdata\tbody\tface\thead\tSTR,TEC,SPD,JMP,DEF\toutfit"
     * (outfit: its NPCData.taste OUTFIT path, "" none).
     * @returns {string}
     */
    npc_roster() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_npc_roster(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Dev aid: every character, one line each — "index\tname\tteam\tx,y,z\tHP/max\tstatus
     * script\tvehicle" (status: alive / dead / gone; vehicle: the ridden one's name and HP).
     * @returns {string}
     */
    npcs_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_npcs_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Outfits known, one per line: "path\tname\tdescription\tSTR,TEC,SPD,JMP,DEF\tnoitem".
     * @returns {string}
     */
    outfit_list() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_outfit_list(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * OutfitData.preview as texture_rgba gives it (empty when it has none).
     * @param {string} path
     * @returns {Uint8Array}
     */
    outfit_preview(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_outfit_preview(this.__wbg_ptr, ptr0, len0);
        var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v2;
    }
    /**
     * Status line: running script, player status/behavior, and engine calls not yet ported.
     * `target` is an `arena.players` index — the same number as `npcs_info`'s first column and
     * the `[i]` lines below. It may be an ally: the original's aim lock
     * (WorldModel3D.getLockObject) takes the nearest lockable body in sight, whatever its team.
     * @returns {string}
     */
    player_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_player_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Draw one frame at animation frame `frame`, orbiting the camera by `yaw`/`pitch` radians,
     * then the 2D screen (GLEngine 2D over the 3D view: `paint_ui`).
     * @param {number} width
     * @param {number} height
     * @param {number} yaw
     * @param {number} pitch
     * @param {number} frame
     */
    render(width, height, yaw, pitch, frame) {
        wasm.viewer_render(this.__wbg_ptr, width, height, yaw, pitch, frame);
    }
    /**
     * Dev aid: start any player script by name (own table, then /player/dekachara for a DEKA
     * character, then /player/common).
     * @param {string} name
     * @returns {boolean}
     */
    run_script(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_run_script(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * The PlayerBody paths the loaded characters' scripts may changeBody to (string constants
     * ending in ".body" in their PlayerData and the common scripts), one per line, for the page
     * to load with begin_model + the body and hands, then set_body_model.
     * @returns {string}
     */
    script_bodies() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_script_bodies(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * PlayerForm.setBody(`path`) draws model `model` (begin_model, then its body.shp and hands).
     * @param {string} path
     * @param {number} model
     */
    set_body_model(path, model) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_body_model(this.__wbg_ptr, ptr0, len0, model);
    }
    /**
     * WorldModel3D.bringstr for the next map loaded (DuelRule: the rounds won so far, from the
     * HUD's `versus.next`).
     * @param {string} s
     */
    set_bring(s) {
        const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_bring(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Config.Key.keyboard as saved ("118,99,120,122,10"); anything else sets the defaults.
     * @param {string} keys
     */
    set_control_keys(keys) {
        const ptr0 = passStringToWasm0(keys, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_control_keys(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * The package's `userdata` (Game's UserData list): each style's look before any is saved.
     * @param {Uint8Array} bytes
     */
    set_default_userdata(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_set_default_userdata(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Korean names / lines (`dic_ko.unicode`).
     * @param {Uint8Array} bytes
     */
    set_dictionary(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_dictionary(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Dev cheat (not in the original): I take no damage from hits or poison.
     * @param {boolean} on
     */
    set_god(on) {
        wasm.viewer_set_god(this.__wbg_ptr, on);
    }
    /**
     * Enter walking mode: `check` is a check map (`.md` with embedded checkmap, or `_h.mpv`),
     * `poa` the style's `player.poa` (collision boxes, techniques, scripts), `md` the map data
     * holding the spawn point. `now` is the page clock in ms.
     * The map's resource path ("map/tour4_3.md") for the next set_world (nav door fixes).
     * @param {string} name
     */
    set_map_name(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_map_name(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Deviation: play the roster NPC `key` ("npc:<name>", its PlayerData `poa`) instead of a
     * style from the next map on ("" back to the style). Its own model (gori, hissaturobo,
     * dragon) is drawn for me — and in the edit preview — from draws kept under my own
     * PlayerData, apart from the map's template of the same NPC (another PlayerData, another
     * model index for a look): the two never share drawing state.
     * @param {string} key
     * @param {Uint8Array} poa
     */
    set_my_npc(key, poa) {
        const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(poa, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_set_my_npc(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * UserData.outfit: what Player(world, userdata) applies when the next map starts.
     * @param {string} path
     */
    set_my_outfit(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_my_outfit(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * The style I play (its `/player/style/<x>` folder): UserData.getStatus gives me that
     * style's levels and size from setting.set.
     * @param {string} refer
     */
    set_my_style(refer) {
        const ptr0 = passStringToWasm0(refer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_set_my_style(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * OptionPanel OUTLINE (Config.graphics.outline).
     * @param {boolean} on
     */
    set_outlines(on) {
        wasm.viewer_set_outlines(this.__wbg_ptr, on);
    }
    /**
     * @param {Uint8Array} bytes
     */
    set_setting(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_set_setting(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * OptionPanel SHADOW (Config.graphics.shadow): ViewModel.hasshadow, read again by every
     * new ViewModel (the option panel is only reachable between games, so reading it every
     * frame is the same).
     * @param {boolean} on
     */
    set_shadows(on) {
        wasm.viewer_set_shadows(this.__wbg_ptr, on);
    }
    /**
     * GaidenManager.score before this stage (GameResultPanel's starting total).
     * @param {number} total
     */
    set_story_total(total) {
        wasm.viewer_set_story_total(this.__wbg_ptr, total);
    }
    /**
     * Animate slotted parts with a `.srt` skeleton.
     * @param {Uint8Array} srt
     */
    set_structure(srt) {
        const ptr0 = passArray8ToWasm0(srt, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_set_structure(this.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Uint8Array} check
     * @param {Uint8Array} poa
     * @param {Uint8Array} md
     * @param {number} now
     */
    set_world(check, poa, md, now) {
        const ptr0 = passArray8ToWasm0(check, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(poa, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_set_world(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, now);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * setting.set's PlayerStyles for the edit screen, one per line:
     * "folder\tname (translated)\tSTR,TEC,SPD,JMP,DEF".
     * @returns {string}
     */
    styles_list() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_styles_list(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Sounds started this frame, nearest first: "path\tvolume\tpitch" per line.
     * 원본 ShapeModel.playSound 는 setVolume(스크립트 값) · setPitch · play 뿐이다 — 좌우
     * 패닝(Sound.setPan)은 JSAudio.main(시험 도구)만 부르고 게임은 쓰지 않으므로 패닝 없음이
     * 원본 그대로다. Deviation: 원본에는 거리 감쇠도 없는데(모든 보기 모델의 소리가 제 볼륨
     * 그대로) 여기서는 조종하는 캐릭터에서 15 m 에 걸쳐 볼륨을 줄인다.
     * @returns {string}
     */
    take_sounds() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_take_sounds(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * A `.tex` as [width u32 LE, height u32 LE, RGBA...] (for page overlays: prologue, endings).
     * @param {Uint8Array} bytes
     * @returns {Uint8Array}
     */
    texture_rgba(bytes) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.viewer_texture_rgba(this.__wbg_ptr, ptr0, len0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v2;
    }
    /**
     * The system-font strings of the last 2D pass (gfx2d::Label JSON, y from the top of the
     * 640 x 480 screen) for the page to draw over the canvas.
     * @returns {string}
     */
    ui_labels() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.viewer_ui_labels(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * One game frame. `mask`: up=1 right=2 down=4 left=8; `a1`/`a2` = attack buttons.
     * @param {number} mask
     * @param {boolean} jump
     * @param {boolean} a1
     * @param {boolean} a2
     * @param {boolean} aim
     * @param {number} now
     */
    update(mask, jump, a1, a2, aim, now) {
        wasm.viewer_update(this.__wbg_ptr, mask, jump, a1, a2, aim, now);
    }
    /**
     * One game frame from the held keys: `mask` the cursor (up=1 right=2 down=4 left=8),
     * `buttons` the OR of `key_buttons` over the held keys (Config.Key.keyboard in force).
     * @param {number} mask
     * @param {number} buttons
     * @param {number} now
     */
    update_buttons(mask, buttons, now) {
        wasm.viewer_update_buttons(this.__wbg_ptr, mask, buttons, now);
    }
    /**
     * PlayerEditPanel.setOutfit: I (the edit preview, and arena.players[0] in the next world)
     * wear this outfit instead of any before ("" none). Only me: a character sharing my look's
     * model (a stand-in, the sparring partner) has its own equipview.
     * @param {string} path
     */
    wear_outfit(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.viewer_wear_outfit(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Viewer.prototype[Symbol.dispose] = Viewer.prototype.free;

/**
 * Path of the check map a `.md` collides with, or None when it is embedded.
 * @param {Uint8Array} bytes
 * @returns {string | undefined}
 */
export function check_map_path(bytes) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.check_map_path(ptr0, len0);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    let v2;
    if (ret[0] !== 0) {
        v2 = getStringFromWasm0(ret[0], ret[1]);
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    }
    return v2;
}

/**
 * RESOLUTION's choice when the page has none saved (`menu::DEFAULT_RESO`, a Deviation: the
 * original's Config.Display.reso starts at 0).
 * @returns {number}
 */
export function default_reso() {
    const ret = wasm.default_reso();
    return ret >>> 0;
}

/**
 * The view of each MapData.Layer of a `.md` (Layer.attach): the `.mpv` path, or "" when the
 * view is embedded in the `.md`. Empty for a map without layers (view in MapData.mapview) or an
 * `.mpv`.
 * @param {Uint8Array} bytes
 * @returns {string[]}
 */
export function map_layer_paths(bytes) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.map_layer_paths(ptr0, len0);
    if (ret[3]) {
        throw takeFromExternrefTable0(ret[2]);
    }
    var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]);
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Model name referenced by a `.body` (`bodyname`) or `.face` (`facename`) file.
 * @param {Uint8Array} bytes
 * @returns {string}
 */
export function model_name(bytes) {
    let deferred3_0;
    let deferred3_1;
    try {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.model_name(ptr0, len0);
        var ptr2 = ret[0];
        var len2 = ret[1];
        if (ret[3]) {
            ptr2 = 0; len2 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * The canvas's render size for OptionPanel RESOLUTION's choice `reso` (Config.resw / resh;
 * an unknown one is 640 x 480, Config.Display's default 0).
 * Deviation: the original makes a window (or a display mode) of that size. The page keeps its
 * own size: the canvas's drawing buffer is this size and CSS shows it as the largest 4:3 box
 * that fits the page (letterboxed), so the screen keeps the original's 4:3 and its pixels.
 * @param {number} reso
 * @returns {Uint32Array}
 */
export function resolution(reso) {
    const ret = wasm.resolution(reso);
    var v1 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_boolean_get_5b446f51afd21013: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_activeTexture_11079673eac5c921: function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        },
        __wbg_attachShader_9567ae57af6746d5: function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        },
        __wbg_bindBuffer_0324f62b876c4403: function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        },
        __wbg_bindTexture_3cf008f256f3ed99: function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        },
        __wbg_bindVertexArray_f58af0a346185ec5: function(arg0, arg1) {
            arg0.bindVertexArray(arg1);
        },
        __wbg_blendFunc_589e4252bb396484: function(arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        },
        __wbg_bufferData_5fa44d94fe7a3878: function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        },
        __wbg_clearColor_796427e8ac60fe14: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearColor(arg1, arg2, arg3, arg4);
        },
        __wbg_clear_cb96796cc568b7c8: function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        },
        __wbg_compileShader_c2b53ff3a8851f60: function(arg0, arg1) {
            arg0.compileShader(arg1);
        },
        __wbg_createBuffer_ffe613371d42cfd3: function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createElement_74049073a11f9c31: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createProgram_cbf448e6f18a9402: function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createShader_6c1a2295587878a5: function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createTexture_5f2583508ebe379b: function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_createVertexArray_b223ea69dd08fcab: function(arg0) {
            const ret = arg0.createVertexArray();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_cullFace_12123c1c97f1ba2c: function(arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        },
        __wbg_deleteBuffer_070e58aaaf2a7a8b: function(arg0, arg1) {
            arg0.deleteBuffer(arg1);
        },
        __wbg_deleteTexture_9f42750adb092e4f: function(arg0, arg1) {
            arg0.deleteTexture(arg1);
        },
        __wbg_deleteVertexArray_ca9768805d051d49: function(arg0, arg1) {
            arg0.deleteVertexArray(arg1);
        },
        __wbg_depthFunc_a41fb5adacb22e09: function(arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        },
        __wbg_depthMask_06ecff4d4514c38f: function(arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        },
        __wbg_disable_19fe787eccdf0272: function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        },
        __wbg_document_9854e03c05fc8834: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_drawArrays_08872e02fb57b847: function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        },
        __wbg_drawElements_c8988ba71de1101a: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
        },
        __wbg_enableVertexAttribArray_d52693866bc8b8dd: function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        },
        __wbg_enable_cb4fc19b51148c37: function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        },
        __wbg_fillText_1bcec8b81ad73bd0: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments); },
        __wbg_generateMipmap_cd49f6eec9558721: function(arg0, arg1) {
            arg0.generateMipmap(arg1 >>> 0);
        },
        __wbg_getContext_635e36719cad2623: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getShaderInfoLog_7e0cbba353ca95da: function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getShaderParameter_745acf10b8e45e31: function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_getUniformLocation_50ba45dade572703: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_instanceof_CanvasRenderingContext2d_769208c72dcbf5e6: function(arg0) {
            let result;
            try {
                result = arg0 instanceof CanvasRenderingContext2D;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_0a30c11fbbf41841: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WebGl2RenderingContext_64c994c14c0790fb: function(arg0) {
            let result;
            try {
                result = arg0 instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_82d71df4eddf88bc: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_linkProgram_acdc299c43d734a0: function(arg0, arg1) {
            arg0.linkProgram(arg1);
        },
        __wbg_measureText_1035b288be51876c: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.measureText(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_new_from_slice_37a3c3a194266cb8: function(arg0, arg1) {
            const ret = new Uint32Array(getArrayU32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_from_slice_ca6ad97db1f4779a: function(arg0, arg1) {
            const ret = new Float32Array(getArrayF32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_polygonOffset_81dc8ca84e29572b: function(arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        },
        __wbg_scissor_12ddc324094acd50: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        },
        __wbg_set_fillStyle_a2961b4d44e572af: function(arg0, arg1, arg2) {
            arg0.fillStyle = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_font_1f60a05a2544a2ff: function(arg0, arg1, arg2) {
            arg0.font = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_height_c9789c1c77eaedff: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_textBaseline_d5ba548751584f49: function(arg0, arg1, arg2) {
            arg0.textBaseline = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_width_b0e1267db4b196b5: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_shaderSource_c8812639b47d87b9: function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        },
        __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_0b583911f537483a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_texImage2D_151a358c7288e555: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9 === 0 ? undefined : getArrayU8FromWasm0(arg9, arg10));
        }, arguments); },
        __wbg_texImage2D_ad7973ba95a99499: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4 >>> 0, arg5 >>> 0, arg6);
        }, arguments); },
        __wbg_texParameteri_7864076abcdb03e0: function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        },
        __wbg_uniform1i_531b98c4a7177366: function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        },
        __wbg_uniform4f_8dd8f311e656ca0d: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        },
        __wbg_uniform4fv_cf8ff646c36232c8: function(arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        },
        __wbg_uniformMatrix4fv_dff9738d995fd0b1: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        },
        __wbg_useProgram_e075c2902e420761: function(arg0, arg1) {
            arg0.useProgram(arg1);
        },
        __wbg_vertexAttrib3f_a055c0a35d0e5558: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.vertexAttrib3f(arg1 >>> 0, arg2, arg3, arg4);
        },
        __wbg_vertexAttribPointer_24b495e18df325dc: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        },
        __wbg_viewport_16936692526e2ce6: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        },
        __wbg_width_e95ad291d52fe17e: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./amped_web_bg.js": import0,
    };
}

const ViewerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_viewer_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('amped_web_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
