import helper from './model'

export default function() {
    return {
        set(state, data) {
            if (!data) {
                state.list = [];
                return;
            }
            if (Array.isArray(data)) {
                state.list = data;
            } else {
                helper.add(state.list, data);
            }
        },
        add(state, datum) {
            if (datum) {
                var data = [];
                var o_data = datum.data ? datum.data : datum;
                var data = Array.isArray(o_data) ? o_data : [o_data];

                helper.add(state.list, data);
            }
        },
        remove(state, id) {
            if (id) {
                var o_id = id.id ? id.id : id;
                var ids = Array.isArray(o_id) ? o_id : [o_id];

                helper.remove(state.list, ids);
            }
        },
        update(state, datum) {
            if (datum) {
                var o_data = datum.data ? datum.data : datum;
                var data = Array.isArray(o_data) ? o_data : [o_data];
                helper.update(state.list, data);
            }
        },
        clear(state) {
            state.list = [];
        },
        join(state, data) {
            if (data) {
                data = Array.isArray(data) ? data : [data];
                for (let i in data) {
                    helper.add(state.list,data[i])
                }
            }
        }
    };
}
