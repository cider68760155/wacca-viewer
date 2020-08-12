<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>WACCA viewer</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
    </head>

    <body>
        <h1>WACCA viewer</h1>
        <h2>更新差分</h2>
        <div id="app">
            <v-app id="diff">
                <v-data-table :headers="headers" :items="song_result" items-per-page="-1" class="elevation-1"></v-data-table>
            </v-app>
        </div>
        <script type="text/javascript">
            var post_data = '<?php 
                function escape($s){
                    $s = str_replace("\\","\\\\",$s);
                    $s = str_replace("'","\'",$s);
                    return $s;
                }
                echo escape($_POST["result"]);
            ?>';
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
        <script src="index.js"></script>
    </body>
</html>
